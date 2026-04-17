import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  ShopifyCartLine,
  Product,
  Cart,
  CartLine,
} from './types'

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

const STOREFRONT_API_VERSION = '2024-07'

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string
  variables?: Record<string, unknown>
}): Promise<T> {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`)
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(`Shopify GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data as T
}

// ─── Fragments ────────────────────────────────────────────────────────────────

const IMAGE_FRAGMENT = `
  fragment ImageFields on Image {
    url
    altText
    width
    height
  }
`

const PRICE_FRAGMENT = `
  fragment PriceFields on MoneyV2 {
    amount
    currencyCode
  }
`

const PRODUCT_VARIANT_FRAGMENT = `
  fragment ProductVariantFields on ProductVariant {
    id
    title
    availableForSale
    quantityAvailable
    price { ...PriceFields }
    compareAtPrice { ...PriceFields }
    selectedOptions { name value }
  }
`

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    vendor
    availableForSale
    featuredImage { ...ImageFields }
    images(first: 10) {
      nodes { ...ImageFields }
    }
    priceRange {
      minVariantPrice { ...PriceFields }
      maxVariantPrice { ...PriceFields }
    }
    variants(first: 30) {
      nodes { ...ProductVariantFields }
    }
    options { name values }
    seo { title description }
    isPreOrder: metafield(namespace: "custom", key: "is_pre_order") {
      value
      type
    }
    estimatedShipDate: metafield(namespace: "custom", key: "estimated_ship_date") {
      value
      type
    }
  }
`

const CART_LINE_FRAGMENT = `
  fragment CartLineFields on CartLine {
    id
    quantity
    merchandise {
      ... on ProductVariant {
        id
        title
        price { ...PriceFields }
        selectedOptions { name value }
        product {
          id
          title
          handle
          featuredImage { ...ImageFields }
        }
      }
    }
    cost {
      totalAmount { ...PriceFields }
    }
  }
`

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { ...PriceFields }
      totalAmount { ...PriceFields }
      totalTaxAmount { ...PriceFields }
    }
    lines(first: 100) {
      nodes { ...CartLineFields }
    }
  }
`

// ─── Normalizers ──────────────────────────────────────────────────────────────

export function normalizeProduct(product: ShopifyProduct): Product {
  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    productType: product.productType,
    tags: product.tags,
    availableForSale: product.availableForSale,
    images: product.images.nodes,
    price: product.priceRange.minVariantPrice.amount,
    compareAtPrice: product.variants.nodes[0]?.compareAtPrice?.amount ?? null,
    currencyCode: product.priceRange.minVariantPrice.currencyCode,
    variants: product.variants.nodes,
    options: product.options,
    isPreOrder: product.isPreOrder?.value === 'true',
    estimatedShipDate: product.estimatedShipDate?.value ?? null,
    featuredImage: product.featuredImage,
  }
}

export function normalizeCart(cart: ShopifyCart): Cart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity,
    subtotal: cart.cost.subtotalAmount.amount,
    total: cart.cost.totalAmount.amount,
    currencyCode: cart.cost.subtotalAmount.currencyCode,
    lines: cart.lines.nodes.map(normalizeCartLine),
  }
}

function normalizeCartLine(line: ShopifyCartLine): CartLine {
  return {
    id: line.id,
    quantity: line.quantity,
    variantId: line.merchandise.id,
    productId: line.merchandise.product.id,
    productTitle: line.merchandise.product.title,
    productHandle: line.merchandise.product.handle,
    variantTitle: line.merchandise.title,
    selectedOptions: line.merchandise.selectedOptions,
    price: line.merchandise.price.amount,
    totalPrice: line.cost.totalAmount.amount,
    currencyCode: line.merchandise.price.currencyCode,
    image: line.merchandise.product.featuredImage,
  }
}

// ─── Products ─────────────────────────────────────────────────────────────────

const GET_PRODUCTS_QUERY = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_FRAGMENT}

  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      nodes { ...ProductFields }
    }
  }
`

export async function getProducts(first = 24, query?: string): Promise<Product[]> {
  try {
    const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>({
      query: GET_PRODUCTS_QUERY,
      variables: { first, query },
    })
    return data.products.nodes.map(normalizeProduct)
  } catch (error) {
    console.error('getProducts error:', error)
    return []
  }
}

const GET_PRODUCT_BY_HANDLE_QUERY = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_FRAGMENT}

  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFields
    }
  }
`

export async function getProductByHandle(handle: string): Promise<Product | null> {
  try {
    const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>({
      query: GET_PRODUCT_BY_HANDLE_QUERY,
      variables: { handle },
    })
    if (!data.productByHandle) return null
    return normalizeProduct(data.productByHandle)
  } catch (error) {
    console.error('getProductByHandle error:', error)
    return null
  }
}

// ─── Collections ──────────────────────────────────────────────────────────────

const GET_COLLECTIONS_QUERY = `
  ${IMAGE_FRAGMENT}

  query GetCollections($first: Int!) {
    collections(first: $first) {
      nodes {
        id
        handle
        title
        description
        image { ...ImageFields }
      }
    }
  }
`

export async function getCollections(first = 10) {
  try {
    const data = await shopifyFetch<{
      collections: { nodes: ShopifyCollection[] }
    }>({
      query: GET_COLLECTIONS_QUERY,
      variables: { first },
    })
    return data.collections.nodes
  } catch (error) {
    console.error('getCollections error:', error)
    return []
  }
}

const GET_COLLECTION_PRODUCTS_QUERY = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_FRAGMENT}

  query GetCollectionProducts($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      handle
      title
      description
      products(first: $first) {
        nodes { ...ProductFields }
      }
    }
  }
`

export async function getCollectionProducts(handle: string, first = 24): Promise<Product[]> {
  try {
    const data = await shopifyFetch<{
      collectionByHandle: { products: { nodes: ShopifyProduct[] } } | null
    }>({
      query: GET_COLLECTION_PRODUCTS_QUERY,
      variables: { handle, first },
    })
    if (!data.collectionByHandle) return []
    return data.collectionByHandle.products.nodes.map(normalizeProduct)
  } catch (error) {
    console.error('getCollectionProducts error:', error)
    return []
  }
}

// ─── Cart ──────────────────────────────────────────────────────────────────────

const CREATE_CART_MUTATION = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}

  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export async function createCart(
  lines: { merchandiseId: string; quantity: number }[] = []
): Promise<Cart | null> {
  try {
    const data = await shopifyFetch<{
      cartCreate: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
    }>({
      query: CREATE_CART_MUTATION,
      variables: { lines },
    })
    if (data.cartCreate.userErrors.length > 0) {
      console.error('createCart userErrors:', data.cartCreate.userErrors)
      return null
    }
    return normalizeCart(data.cartCreate.cart)
  } catch (error) {
    console.error('createCart error:', error)
    return null
  }
}

const ADD_TO_CART_MUTATION = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}

  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart | null> {
  try {
    const data = await shopifyFetch<{
      cartLinesAdd: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
    }>({
      query: ADD_TO_CART_MUTATION,
      variables: { cartId, lines },
    })
    if (data.cartLinesAdd.userErrors.length > 0) {
      console.error('addToCart userErrors:', data.cartLinesAdd.userErrors)
      return null
    }
    return normalizeCart(data.cartLinesAdd.cart)
  } catch (error) {
    console.error('addToCart error:', error)
    return null
  }
}

const UPDATE_CART_LINES_MUTATION = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}

  mutation UpdateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export async function updateCartLines(
  cartId: string,
  lines: { id: string; quantity: number }[]
): Promise<Cart | null> {
  try {
    const data = await shopifyFetch<{
      cartLinesUpdate: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
    }>({
      query: UPDATE_CART_LINES_MUTATION,
      variables: { cartId, lines },
    })
    if (data.cartLinesUpdate.userErrors.length > 0) {
      console.error('updateCartLines userErrors:', data.cartLinesUpdate.userErrors)
      return null
    }
    return normalizeCart(data.cartLinesUpdate.cart)
  } catch (error) {
    console.error('updateCartLines error:', error)
    return null
  }
}

const REMOVE_CART_LINES_MUTATION = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}

  mutation RemoveCartLines($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

export async function removeCartLines(
  cartId: string,
  lineIds: string[]
): Promise<Cart | null> {
  try {
    const data = await shopifyFetch<{
      cartLinesRemove: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
    }>({
      query: REMOVE_CART_LINES_MUTATION,
      variables: { cartId, lineIds },
    })
    if (data.cartLinesRemove.userErrors.length > 0) {
      console.error('removeCartLines userErrors:', data.cartLinesRemove.userErrors)
      return null
    }
    return normalizeCart(data.cartLinesRemove.cart)
  } catch (error) {
    console.error('removeCartLines error:', error)
    return null
  }
}

const GET_CART_QUERY = `
  ${IMAGE_FRAGMENT}
  ${PRICE_FRAGMENT}
  ${CART_LINE_FRAGMENT}
  ${CART_FRAGMENT}

  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartFields
    }
  }
`

export async function getCart(cartId: string): Promise<Cart | null> {
  try {
    const data = await shopifyFetch<{ cart: ShopifyCart | null }>({
      query: GET_CART_QUERY,
      variables: { cartId },
    })
    if (!data.cart) return null
    return normalizeCart(data.cart)
  } catch (error) {
    console.error('getCart error:', error)
    return null
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatPrice(amount: string, currencyCode: string = 'GBP'): string {
  const num = parseFloat(amount)
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)
}
