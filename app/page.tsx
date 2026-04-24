import { HeroSection } from '@/components/sections/HeroSection'
import { PressBar } from '@/components/sections/PressBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeaturedKit } from '@/components/sections/FeaturedKit'
import { WhyUVGel } from '@/components/sections/WhyUVGel'
import { BrandStory } from '@/components/sections/BrandStory'
import { InstagramGrid } from '@/components/sections/InstagramGrid'
import { EmailSignup } from '@/components/sections/EmailSignup'
import { ProductGrid } from '@/components/product/ProductGrid'
import { getProducts } from '@/lib/shopify'
import { MOCK_PRODUCTS } from '@/lib/mock-products'

export default async function HomePage() {
  const fetched = await getProducts(4)
  const products = fetched.length > 0 ? fetched : MOCK_PRODUCTS.slice(0, 4)

  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedKit />

      {/* Bestsellers */}
      <section className="section-py section-padding bg-ivory border-t border-nude/60">
        <div className="max-w-7xl mx-auto">
          <ProductGrid
            products={products}
            title="Bestsellers"
            subtitle="Our Most Loved"
          />
          <div className="text-center mt-10">
            <a href="/products" className="btn-primary">View All</a>
          </div>
        </div>
      </section>

      <WhyUVGel />
      <BrandStory />
      <PressBar />
      <InstagramGrid />
      <EmailSignup />
    </>
  )
}
