import { notFound } from 'next/navigation'
import { getProductByHandle } from '@/lib/shopify'
import { MOCK_PRODUCTS } from '@/lib/mock-products'
import { ProductDetail } from '@/components/product/ProductDetail'

// Server component — fetches product data and renders the Snipcart validation
// button in the initial HTML so Snipcart's crawler can validate the product.
export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product =
    (await getProductByHandle(params.handle)) ??
    MOCK_PRODUCTS.find((m) => m.handle === params.handle) ??
    null

  if (!product) notFound()

  const defaultVariant = product.variants[0]
  const rawPrice = parseFloat(defaultVariant?.price.amount ?? product.price ?? '0')

  return (
    <>
      {/* Hidden snipcart-add-item button rendered server-side so Snipcart's
          product crawler can find and validate it when the cart opens. */}
      <button
        style={{ display: 'none' }}
        className="snipcart-add-item"
        data-item-id={defaultVariant?.id ?? product.handle}
        data-item-name={product.title}
        data-item-price={rawPrice}
        data-item-url={`/products/${product.handle}`}
        data-item-image={product.images[0]?.url ?? ''}
        data-item-quantity={1}
      />
      <ProductDetail product={product} />
    </>
  )
}
