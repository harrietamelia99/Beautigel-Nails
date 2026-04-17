// Shopify Storefront API Types

export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyPrice {
  amount: string
  currencyCode: string
}

export interface ShopifyProductVariant {
  id: string
  title: string
  availableForSale: boolean
  price: ShopifyPrice
  compareAtPrice: ShopifyPrice | null
  selectedOptions: { name: string; value: string }[]
  quantityAvailable: number | null
}

export interface ShopifyProductOption {
  name: string
  values: string[]
}

export interface ShopifyMetafield {
  value: string
  type: string
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  productType: string
  tags: string[]
  vendor: string
  availableForSale: boolean
  images: {
    nodes: ShopifyImage[]
  }
  priceRange: {
    minVariantPrice: ShopifyPrice
    maxVariantPrice: ShopifyPrice
  }
  variants: {
    nodes: ShopifyProductVariant[]
  }
  options: ShopifyProductOption[]
  isPreOrder: ShopifyMetafield | null
  estimatedShipDate: ShopifyMetafield | null
  featuredImage: ShopifyImage | null
  seo: {
    title: string | null
    description: string | null
  }
}

export interface ShopifyCollection {
  id: string
  handle: string
  title: string
  description: string
  image: ShopifyImage | null
  products: {
    nodes: ShopifyProduct[]
  }
}

// Cart Types
export interface ShopifyCartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: ShopifyPrice
    product: {
      id: string
      title: string
      handle: string
      featuredImage: ShopifyImage | null
    }
    selectedOptions: { name: string; value: string }[]
  }
  cost: {
    totalAmount: ShopifyPrice
  }
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    subtotalAmount: ShopifyPrice
    totalAmount: ShopifyPrice
    totalTaxAmount: ShopifyPrice | null
  }
  lines: {
    nodes: ShopifyCartLine[]
  }
}

// Normalised types used across the app
export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  productType: string
  tags: string[]
  availableForSale: boolean
  images: ShopifyImage[]
  price: string
  compareAtPrice: string | null
  currencyCode: string
  variants: ShopifyProductVariant[]
  options: ShopifyProductOption[]
  isPreOrder: boolean
  estimatedShipDate: string | null
  featuredImage: ShopifyImage | null
}

export interface Cart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  subtotal: string
  total: string
  currencyCode: string
  lines: CartLine[]
}

export interface CartLine {
  id: string
  quantity: number
  variantId: string
  productId: string
  productTitle: string
  productHandle: string
  variantTitle: string
  selectedOptions: { name: string; value: string }[]
  price: string
  totalPrice: string
  currencyCode: string
  image: ShopifyImage | null
}

export interface CartContextType {
  cart: Cart | null
  isOpen: boolean
  isLoading: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (variantId: string, quantity?: number) => Promise<void>
  updateCartLine: (lineId: string, quantity: number) => Promise<void>
  removeCartLine: (lineId: string) => Promise<void>
  totalQuantity: number
}
