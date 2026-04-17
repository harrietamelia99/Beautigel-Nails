import { Metadata } from 'next'
import { getProducts } from '@/lib/shopify'
import { MOCK_PRODUCTS } from '@/lib/mock-products'
import { ProductGrid } from '@/components/product/ProductGrid'

export const metadata: Metadata = {
  title: 'Shop All Products',
  description:
    'Browse the full Beautigel Nails collection — premium gel nail wraps, UV lamps, cuticle oils, and starter kits.',
}

export default async function ProductsPage() {
  const fetched = await getProducts(48)
  const products = fetched.length > 0 ? fetched : MOCK_PRODUCTS

  return (
    <div className="pt-24 md:pt-32 section-py section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-14 md:mb-18">
          <p className="label-text text-mocha mb-4">Browse the Collection</p>
          <h1 className="section-heading text-4xl md:text-5xl text-charcoal mb-4">All Products</h1>
          <p className="text-mocha text-sm max-w-lg mx-auto">
            Premium gel nail wraps, tools, and accessories. Everything you need for salon-quality nails at home.
          </p>
        </div>

        <ProductGrid products={products} showFilters />
      </div>
    </div>
  )
}
