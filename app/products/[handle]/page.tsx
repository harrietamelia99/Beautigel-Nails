'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductByHandle, getProducts, formatPrice } from '@/lib/shopify'
import { MOCK_PRODUCTS } from '@/lib/mock-products'
import { Product } from '@/lib/types'
import { PreOrderBadge } from '@/components/product/PreOrderBadge'
import { ReviewsSection } from '@/components/product/ReviewsSection'
import { ProductCard } from '@/components/product/ProductCard'
import { useCart } from '@/context/CartContext'

const BLUE = '#b4cbe6'

// ── SVG icon sets ──────────────────────────────────────────────
const GEL_WRAP_USPS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M13 2.05V4.08c3.39.49 6 3.39 6 6.92 0 2.73-1.56 5.11-3.87 6.37L13 15v5h5l-1.22-1.22C18.91 17.07 21 14.14 21 11c0-4.96-3.96-9.02-8-8.95zM11 2.05C6.96 3.03 4 6.77 4 11c0 3.14 2.09 6.07 5 7.78L7 20h5v-5l-2.13 2.37C8.56 16.11 7 13.73 7 11c0-3.53 2.61-6.43 6-6.92V2.05h-2z"/></svg>,
    title: 'Quick & Easy',
    desc: 'Salon-quality nails in minutes',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>,
    title: 'Long-Lasting',
    desc: 'Gorgeous wear for 2–3 weeks',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
    title: 'Premium Finish',
    desc: 'Smooth, glossy, elegant gel look',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M17 8C8 10 5.9 16.17 3.82 21H5.8c.35-.75.72-1.5 1.1-2.2 1.46.5 3.05.7 4.6.5C15 18.5 19 14 19 14c-2 2-4.5 3-7 3.5-.38.08-.77.13-1.15.16.11-.33.22-.66.35-1 .89-2.49 2.62-4.65 5.8-6.66zm-7.5 9.5c.45-.05.9-.14 1.34-.27C13.9 15.88 16 13.77 17 12c-2.5 2.5-5 4-8 4.5-.17.03-.34.05-.5.08z"/></svg>,
    title: 'Gentle on Nails',
    desc: 'Removes easily without damage',
  },
]

const UV_LAMP_USPS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
    title: 'Professional Quality',
    desc: 'Salon results at home',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>,
    title: 'Fast Cure',
    desc: 'Cures wraps in 60–90 seconds',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M20 6h-2.18c.07-.44.18-.86.18-1.3 0-2.76-2.24-5-5-5S8 1.94 8 4.7c0 .44.11.86.18 1.3H6C4.9 6 4 6.9 4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-4.1c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7-2.7-1.21-2.7-2.7S11.51 1.9 13 1.9z"/></svg>,
    title: 'Hard Glossy Finish',
    desc: 'Chip-resistant, long-lasting',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>,
    title: 'Compact & Light',
    desc: 'Easy to use and store',
  },
]

const CUTICLE_OIL_USPS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 2c0 0-6 6.5-6 10.5a6 6 0 0 0 12 0C18 8.5 12 2 12 2z"/></svg>,
    title: 'Nourishes & Moisturises',
    desc: 'Keeps cuticles soft and healthy',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/></svg>,
    title: 'Strengthens Nails',
    desc: 'Delivers vitamins and nutrients',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M17 8C8 10 5.9 16.17 3.82 21H5.8c.35-.75.72-1.5 1.1-2.2 1.46.5 3.05.7 4.6.5C15 18.5 19 14 19 14c-2 2-4.5 3-7 3.5-.38.08-.77.13-1.15.16.11-.33.22-.66.35-1 .89-2.49 2.62-4.65 5.8-6.66z"/></svg>,
    title: 'Cruelty-Free & Vegan',
    desc: 'Kind to you and the planet',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Protects & Revitalises',
    desc: 'Supports natural nail growth',
  },
]

function getUSPs(productType: string, tags: string[]) {
  const type = productType.toLowerCase()
  const tagStr = tags.join(' ').toLowerCase()
  if (type.includes('lamp') || tagStr.includes('lamp')) return UV_LAMP_USPS
  if (type.includes('cuticle') || tagStr.includes('cuticle')) return CUTICLE_OIL_USPS
  return GEL_WRAP_USPS
}

// ── Accordion ──────────────────────────────────────────────────
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-nude">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="label-text text-charcoal">{title}</span>
        <span className="text-mocha text-lg leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pb-5 text-mocha text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────
export default function ProductPage({ params }: { params: { handle: string } }) {
  const [product, setProduct] = useState<Product | null | undefined>(undefined)
  const [related, setRelated] = useState<Product[]>([])
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [activeImage, setActiveImage] = useState(0)
  const [adding, setAdding] = useState(false)
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    getProductByHandle(params.handle).then((p) => {
      // Fall back to mock product if API unavailable
      const resolved = p ?? MOCK_PRODUCTS.find((m) => m.handle === params.handle) ?? null
      setProduct(resolved)
      if (resolved?.variants[0]) {
        setSelectedVariantId(resolved.variants[0].id)
        const opts: Record<string, string> = {}
        resolved.variants[0].selectedOptions.forEach(({ name, value }) => { opts[name] = value })
        setSelectedOptions(opts)
      }
    })

    getProducts(6).then((products) => {
      const list = products.length > 0 ? products : MOCK_PRODUCTS
      setRelated(list.filter((p) => p.handle !== params.handle).slice(0, 4))
    })
  }, [params.handle])

  if (product === undefined) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: BLUE, borderTopColor: 'transparent' }} />
      </div>
    )
  }
  if (product === null) notFound()

  const usps = getUSPs(product.productType, product.tags)
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0]

  const handleOptionChange = (name: string, value: string) => {
    const newOpts = { ...selectedOptions, [name]: value }
    setSelectedOptions(newOpts)
    const match = product.variants.find((v) =>
      v.selectedOptions.every((opt) => newOpts[opt.name] === opt.value)
    )
    if (match) setSelectedVariantId(match.id)
  }

  const handleAddToCart = async () => {
    if (!selectedVariantId || adding) return
    setAdding(true)
    for (let i = 0; i < qty; i++) await addToCart(selectedVariantId)
    setAdding(false)
  }

  return (
    <div className="bg-ivory min-h-screen">

      {/* ── Breadcrumb ── */}
      <div className="section-padding pt-24 md:pt-32 pb-0">
        <nav className="flex items-center gap-2 text-xs text-mocha tracking-wide max-w-7xl mx-auto">
          <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
          <span>/</span>
          <span className="text-charcoal line-clamp-1">{product.title}</span>
        </nav>
      </div>

      {/* ── Main grid ── */}
      <div className="section-padding py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT — image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative aspect-[3/4] bg-nude rounded-2xl overflow-hidden">
              {product.images[activeImage] ? (
                <Image
                  src={product.images[activeImage].url}
                  alt={product.images[activeImage].altText ?? product.title}
                  fill sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-mocha/20 text-7xl">💅</div>
              )}
              {product.isPreOrder && (
                <div className="absolute top-4 left-4">
                  <PreOrderBadge estimatedShipDate={product.estimatedShipDate} />
                </div>
              )}
            </div>

            {/* Thumbnails — horizontal row below main image */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.slice(0, 5).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-14 h-16 rounded-xl overflow-hidden transition-all shrink-0 ${
                      activeImage === i ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                    style={activeImage === i ? { outline: '2px solid #b4cbe6', outlineOffset: '2px' } : {}}
                  >
                    <Image src={img.url} alt={img.altText ?? product.title} width={56} height={64} className="object-cover w-full h-full" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — product info */}
          <div className="flex flex-col">

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-4">
              {product.availableForSale ? (
                <span className="flex items-center gap-1.5 text-xs text-mocha">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  In stock · ships within 1–2 business days
                </span>
              ) : (
                <span className="text-xs text-mocha">Out of stock</span>
              )}
            </div>

            {/* Title */}
            <h1 className="section-heading text-xl md:text-2xl text-charcoal mb-4">{product.title}</h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-light text-charcoal">
                {formatPrice(selectedVariant?.price.amount ?? product.price, selectedVariant?.price.currencyCode ?? product.currencyCode)}
              </span>
              {selectedVariant?.compareAtPrice && (
                <span className="text-sm text-mocha line-through">
                  {formatPrice(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                </span>
              )}
            </div>

            <div className="h-px bg-nude mb-6" />

            {/* Variant selectors */}
            {product.options
              .filter((opt) => opt.values.length > 1 || opt.values[0] !== 'Default Title')
              .map((option) => (
                <div key={option.name} className="mb-6">
                  <p className="label-text text-charcoal mb-3">
                    {option.name}:&nbsp;
                    <span className="normal-case tracking-normal font-normal text-mocha">{selectedOptions[option.name]}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleOptionChange(option.name, value)}
                        className={`px-4 py-2 rounded-full text-xs tracking-wide border transition-all ${
                          selectedOptions[option.name] === value
                            ? 'bg-charcoal text-ivory border-charcoal'
                            : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

            {/* Qty + Add to cart */}
            <div className="flex gap-3 mb-4">
              {/* Qty */}
              <div className="flex items-center border border-nude rounded-full overflow-hidden shrink-0">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-mocha hover:text-charcoal transition-colors text-sm">−</button>
                <span className="px-3 text-sm text-charcoal font-medium w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-mocha hover:text-charcoal transition-colors text-sm">+</button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale || adding}
                className="btn-primary flex-1 justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {adding ? 'Adding...' : product.isPreOrder ? 'Pre-Order Now' : 'Add to Bag'}
              </button>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={BLUE}><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>, label: 'Free UK shipping over £35' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={BLUE}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Secure checkout' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={BLUE}><path d="M19 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 11H5V9h14v9zM1 5h22v2H1zM3 3h18v2H3z"/></svg>, label: 'Easy returns' },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center text-center gap-1.5 bg-nude/50 rounded-2xl p-3">
                  {t.icon}
                  <span className="text-[9px] text-mocha tracking-wide leading-tight">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              {product.descriptionHtml && (
                <Accordion title="About This Product">
                  <div className="prose prose-sm max-w-none text-mocha" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                </Accordion>
              )}
              <Accordion title="How to Apply">
                <p>Prep nails — push back cuticles, lightly buff and wipe with an alcohol pad. Select the closest-fitting wrap, peel and apply from the cuticle outward. Cure under your UV lamp for 60–90 seconds. File off any excess at the tip. <Link href="/how-to" className="text-charcoal underline underline-offset-2">See the full guide →</Link></p>
              </Accordion>
              <Accordion title="Delivery & Returns">
                <div className="space-y-2">
                  <p><strong className="text-charcoal font-medium">UK Standard:</strong> 2–5 business days. Free over £35.</p>
                  <p><strong className="text-charcoal font-medium">UK Express:</strong> 1–2 business days.</p>
                  <p><strong className="text-charcoal font-medium">International:</strong> 7–21 business days.</p>
                  <p><strong className="text-charcoal font-medium">Returns:</strong> Unopened items accepted within 14 days. <Link href="/shipping" className="text-charcoal underline underline-offset-2">Full policy →</Link></p>
                </div>
              </Accordion>
              <div className="border-t border-nude" />
            </div>
          </div>
        </div>

        {/* ── USPs ── */}
        <div className="mt-20 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usps.map((usp) => (
              <div key={usp.title} className="bg-nude/50 rounded-2xl p-5 flex flex-col gap-3">
                <div>{usp.icon}</div>
                <div>
                  <p className="section-heading text-xs text-charcoal mb-1">{usp.title}</p>
                  <p className="text-xs text-mocha leading-snug">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Reviews ── */}
        <ReviewsSection />

        {/* ── Related products ── */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="label-text mb-2">You might also like</p>
                <h2 className="section-heading text-2xl md:text-3xl text-charcoal">More Products</h2>
              </div>
              <Link href="/products" className="btn-ghost hidden md:inline-flex">View all</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
