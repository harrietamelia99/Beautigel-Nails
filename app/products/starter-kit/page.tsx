'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

const BLUE = '#b4cbe6'

const WRAP_STYLES = [
  { id: 'black-french-tip', label: 'Black French Tip', colour: '#1C1C1C' },
  { id: 'candy-apple-red-glitter', label: 'Candy Apple Red Glitter', colour: '#B22222' },
  { id: 'cappuccino', label: 'Cappuccino', colour: '#C4A882' },
  { id: 'cherry-blossom', label: 'Cherry Blossom', colour: '#F4A7B9' },
  { id: 'coffee-and-cream-ombre', label: 'Coffee & Cream Ombré', colour: '#C4956A' },
  { id: 'colour-pop-tips', label: 'Colour Pop Tips', colour: '#E8C4B8' },
  { id: 'coral-glow', label: 'Coral Glow', colour: '#FF6B6B' },
  { id: 'daisy-dream', label: 'Daisy Dream', colour: '#FFF0AA' },
  { id: 'fine-wine-gloss', label: 'Fine Wine Gloss', colour: '#722F37' },
  { id: 'floral-bloom', label: 'Floral Bloom', colour: '#F9A8D4' },
  { id: 'french-check-affair', label: 'French Check Affair', colour: '#F5F0EB' },
  { id: 'golden-luxe', label: 'Golden Luxe', colour: '#D4AF37' },
  { id: 'lavender-love', label: 'Lavender Love', colour: '#B57EDC' },
  { id: 'lilac-cloud', label: 'Lilac Cloud', colour: '#C8A2C8' },
]

const CUTICLE_FRAGRANCES = [
  { id: 'strawberry', label: 'Strawberry' },
  { id: 'peach', label: 'Peach' },
  { id: 'lavender', label: 'Lavender' },
  { id: 'rose', label: 'Rose' },
]

const WHATS_INCLUDED = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="3" x2="9" y2="9"/>
        <line x1="15" y1="3" x2="15" y2="9"/>
      </svg>
    ),
    label: '2× Gel Nail Wrap Kits',
    sub: 'Your choice of style',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="4"/>
        <path d="M12 14v4"/>
        <path d="M9 18h6"/>
        <path d="M9 6.5A4 4 0 0 1 16 10"/>
      </svg>
    ),
    label: '1× UV Lamp',
    sub: 'Cures in 60–90 seconds',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
        <path d="M12 10v11"/>
        <path d="M9 21h6"/>
      </svg>
    ),
    label: '1× Cuticle Oil',
    sub: 'Your choice of fragrance',
  },
]

const SELLING_POINTS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18H7"/>
        <path d="M7 13h7"/>
        <path d="M15 6a4 4 0 0 0-7.5 2c0 3 1.5 5 1.5 5H8"/>
      </svg>
    ),
    title: 'Best Value',
    desc: 'Save compared to buying separately',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.1 15.9 0 13.3 0c-1.4 0-2.5.6-3.3 1.5L9 3 7.9 1.5C7.1.6 6 0 4.7 0 2.1 0 0 2.1 0 4.7c0 .44.11.86.18 1.3H0v2h20v-2zM4.7 4c-.69 0-1.3-.61-1.3-1.3C3.4 2 4 1.4 4.7 1.4c.46 0 .89.21 1.17.55L7.1 3.5C6.6 3.85 5.7 4 4.7 4zm8.6 0c-1 0-1.9-.15-2.4-.5l1.23-1.55c.28-.34.71-.55 1.17-.55.69 0 1.3.61 1.3 1.3 0 .69-.61 1.3-1.3 1.3zM3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8H3v12zm8-7.5h2v5h-2v-5zm-4 0h2v5H7v-5zm8 0h2v5h-2v-5z"/></svg>,
    title: 'Perfect Gift',
    desc: 'Beautifully presented, ready to gift',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
    title: 'Complete Kit',
    desc: 'Everything you need, nothing you don\'t',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Cruelty-Free',
    desc: '100% vegan and cruelty-free formulas',
  },
]

export default function StarterKitPage() {
  const [wrapStyle1, setWrapStyle1] = useState<string | null>(null)
  const [wrapStyle2, setWrapStyle2] = useState<string | null>(null)
  const [fragrance, setFragrance] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const { addToCart } = useCart()

  const isComplete = wrapStyle1 && wrapStyle2 && fragrance

  const handleAddToCart = async () => {
    if (!isComplete || adding) return
    setAdding(true)
    await new Promise((r) => setTimeout(r, 800))
    setAdding(false)
  }

  return (
    <div className="bg-ivory min-h-screen">

      {/* Page header */}
      <div className="section-padding pt-24 md:pt-32 pb-0">
        <nav className="flex items-center gap-2 text-xs text-mocha tracking-wide max-w-7xl mx-auto">
          <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">Starter Kit</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding py-12 md:py-16 border-b border-nude/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/products/starter-kit.png"
              alt="Beautigel Nails Ultimate Starter Kit"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <p className="label-text mb-4">Everything You Need</p>
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal mb-4">
              The Ultimate Starter Kit
            </h1>
            <p className="text-mocha text-sm leading-relaxed mb-6 max-w-lg">
              Your complete introduction to salon-quality gel nail wraps at home. Choose your
              favourite wrap styles and cuticle oil fragrance.
            </p>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-2xl font-light text-charcoal">[STARTER KIT PRICE TBC]</span>
              <span className="text-mocha text-sm">Individual value: £50.96</span>
            </div>

            {/* What's included */}
            <div className="space-y-3">
              {WHATS_INCLUDED.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <span className="text-sm font-medium text-charcoal">{item.label}</span>
                    <span className="text-xs text-mocha ml-2">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customiser */}
      <section className="section-padding py-12 md:py-16 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text mb-3">Customise Your Kit</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">Make It Yours</h2>
          </div>

          {/* Wrap 1 */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <p className="label-text text-charcoal">
                Wrap Style 1
                {wrapStyle1 && (
                  <span className="normal-case tracking-normal font-normal text-mocha ml-2">
                    · {WRAP_STYLES.find((s) => s.id === wrapStyle1)?.label}
                  </span>
                )}
              </p>
              {!wrapStyle1 && <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: BLUE }}>Required</span>}
            </div>
            <div className="flex flex-wrap gap-2">
              {WRAP_STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setWrapStyle1(style.id === wrapStyle1 ? null : style.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-wide transition-all ${
                    wrapStyle1 === style.id
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full border border-mocha/20 shrink-0" style={{ backgroundColor: style.colour }} />
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wrap 2 */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <p className="label-text text-charcoal">
                Wrap Style 2
                {wrapStyle2 && (
                  <span className="normal-case tracking-normal font-normal text-mocha ml-2">
                    · {WRAP_STYLES.find((s) => s.id === wrapStyle2)?.label}
                  </span>
                )}
              </p>
              {!wrapStyle2 && <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: BLUE }}>Required</span>}
            </div>
            <div className="flex flex-wrap gap-2">
              {WRAP_STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setWrapStyle2(style.id === wrapStyle2 ? null : style.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-wide transition-all ${
                    wrapStyle2 === style.id
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full border border-mocha/20 shrink-0" style={{ backgroundColor: style.colour }} />
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fragrance */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <p className="label-text text-charcoal">
                Cuticle Oil Fragrance
                {fragrance && (
                  <span className="normal-case tracking-normal font-normal text-mocha ml-2">
                    · {CUTICLE_FRAGRANCES.find((f) => f.id === fragrance)?.label}
                  </span>
                )}
              </p>
              {!fragrance && <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: BLUE }}>Required</span>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CUTICLE_FRAGRANCES.map((frag) => (
                <button
                  key={frag.id}
                  onClick={() => setFragrance(frag.id === fragrance ? null : frag.id)}
                  className={`py-4 rounded-2xl border text-xs tracking-widest uppercase transition-all ${
                    fragrance === frag.id
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal bg-white'
                  }`}
                >
                  {frag.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            {!isComplete && (
              <p className="text-mocha text-xs mb-4 tracking-wide">
                Select 2 wrap styles and a fragrance to continue
              </p>
            )}
            <button
              onClick={handleAddToCart}
              disabled={!isComplete || adding}
              className="btn-primary px-12 py-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {adding ? 'Adding to Bag...' : isComplete ? 'Add Kit to Bag' : 'Complete Your Selections'}
            </button>
          </div>
        </div>
      </section>

      {/* Selling points */}
      <section className="section-padding py-12 md:py-16 bg-nude/40 border-t border-nude/60">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {SELLING_POINTS.map((pt) => (
            <div key={pt.title} className="bg-nude/50 rounded-2xl p-5 flex flex-col gap-3">
              <div>{pt.icon}</div>
              <div>
                <p className="section-heading text-xs text-charcoal mb-1">{pt.title}</p>
                <p className="text-xs text-mocha leading-snug">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to link */}
      <section className="section-padding py-10 bg-ivory border-t border-nude/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-mocha text-sm">
            New to gel nail wraps?{' '}
            <Link href="/how-to" className="text-charcoal underline underline-offset-2 hover:opacity-70 transition-opacity">
              See our step-by-step application guide →
            </Link>
          </p>
        </div>
      </section>

    </div>
  )
}
