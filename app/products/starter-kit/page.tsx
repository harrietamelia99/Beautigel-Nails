'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { CircularVideoRow } from '@/components/ui/CircularVideoRow'

const BLUE = '#b4cbe6'

const BUNDLES = [
  {
    id: '2-sets',
    count: 2,
    label: 'Any 2 Sets',
    sublabel: 'Get Started',
    price: '£29.99',
    perSet: '£14.99 per set',
    badge: null,
    saving: null,
  },
  {
    id: '3-sets',
    count: 3,
    label: 'Any 3 Sets',
    sublabel: 'Best Value',
    price: '£39.99',
    perSet: '£13.33 per set',
    badge: 'Best Value',
    saving: 'Save £1.66/set vs 2 sets',
  },
  {
    id: '4-sets',
    count: 4,
    label: 'Any 4 Sets',
    sublabel: 'Ultimate Collection',
    price: '£49.99',
    perSet: '£12.50 per set',
    badge: 'Ultimate Collection',
    saving: 'Best price per set',
  },
]

const WRAP_STYLES = [
  { id: 'black-french-tip', label: 'Black French Tip', colour: '#1C1C1C', image: '/products/black-french-tip.png' },
  { id: 'candy-apple-red-glitter', label: 'Candy Apple Red Glitter', colour: '#B22222', image: '/products/candy-apple-red.png' },
  { id: 'cappuccino', label: 'Cappuccino', colour: '#C4A882', image: '/products/cappuccino.png' },
  { id: 'cherry-blossom', label: 'Cherry Blossom', colour: '#F4A7B9', image: '/products/cherry-blossom.png' },
  { id: 'coffee-and-cream-ombre', label: 'Coffee & Cream Ombré', colour: '#C4956A', image: '/products/coffee-and-cream.png' },
  { id: 'colour-pop-tips', label: 'Colour Pop Tips', colour: '#E8C4B8', image: null },
  { id: 'coral-glow', label: 'Coral Glow', colour: '#FF7F6E', image: null },
  { id: 'daisy-dream', label: 'Daisy Dream', colour: '#FFF0AA', image: null },
  { id: 'fine-wine-gloss', label: 'Fine Wine Gloss', colour: '#722F37', image: null },
  { id: 'floral-bloom', label: 'Floral Bloom', colour: '#F9A8D4', image: null },
  { id: 'french-check-affair', label: 'French Check Affair', colour: '#F5F0EB', image: null },
  { id: 'golden-luxe', label: 'Golden Luxe', colour: '#D4AF37', image: null },
  { id: 'lavender-love', label: 'Lavender Love', colour: '#B57EDC', image: null },
  { id: 'lilac-cloud', label: 'Lilac Cloud', colour: '#C8A2C8', image: null },
]

const FRAGRANCES = [
  { id: 'strawberry', label: 'Strawberry', colour: '#f4a7b9' },
  { id: 'peach', label: 'Peach', colour: '#ffc89a' },
  { id: 'lavender', label: 'Lavender', colour: '#c4a8e0' },
  { id: 'rose', label: 'Rose', colour: '#e8849a' },
]

const FREE_GIFTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="4"/>
        <path d="M12 14v4"/>
        <path d="M9 18h6"/>
        <path d="M9 6.5A4 4 0 0 1 16 10"/>
      </svg>
    ),
    label: 'UV Lamp',
    sub: 'Worth £[TBC]',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
        <path d="M12 10v11"/>
        <path d="M9 21h6"/>
      </svg>
    ),
    label: 'Cuticle Oil',
    sub: 'Your choice of fragrance',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="m16 8 4-1v10l-4 1"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'Free UK Shipping',
    sub: 'On every order',
  },
]

const VIDEO_CLIPS = [
  { label: 'Unbox Your Kit', gradient: 'linear-gradient(135deg, #f4e8dc 0%, #e8d0c0 100%)' },
  { label: 'Apply & Smooth', gradient: 'linear-gradient(135deg, #b4cbe6 0%, #8aafd4 100%)' },
  { label: 'Cure Under Lamp', gradient: 'linear-gradient(135deg, #c4a8e0 0%, #b4cbe6 100%)' },
  { label: 'Finished Manicure', gradient: 'linear-gradient(135deg, #f4a7b9 0%, #e8849a 100%)' },
  { label: 'Gentle Removal', gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)' },
]

export default function StarterKitPage() {
  const [selectedBundle, setSelectedBundle] = useState('3-sets')
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [fragrance, setFragrance] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const { addToCart } = useCart()

  const activeBundle = BUNDLES.find((b) => b.id === selectedBundle)!
  const requiredCount = activeBundle.count

  const toggleStyle = (id: string) => {
    setSelectedStyles((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id)
      if (prev.length >= requiredCount) return prev
      return [...prev, id]
    })
  }

  // Reset selections when bundle changes
  const handleBundleChange = (id: string) => {
    setSelectedBundle(id)
    setSelectedStyles([])
  }

  const isComplete = selectedStyles.length === requiredCount && !!fragrance

  const handleAdd = async () => {
    if (!isComplete || adding) return
    setAdding(true)
    await new Promise((r) => setTimeout(r, 800))
    setAdding(false)
  }

  return (
    <div className="bg-ivory min-h-screen">

      {/* Breadcrumb */}
      <div className="section-padding pt-24 md:pt-32 pb-0">
        <nav className="flex items-center gap-2 text-xs text-mocha tracking-wide max-w-7xl mx-auto">
          <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">Starter Collection</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding pt-8 pb-12 md:pb-16 border-b border-nude/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image + free gifts */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden mb-5">
              <Image
                src="/products/starter-kit.png"
                alt="Beautigel Nails Starter Collection"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Free gifts strip */}
            <div className="bg-white border border-nude rounded-2xl p-5">
              <p className="text-[10px] tracking-widest uppercase text-charcoal font-semibold mb-4">
                Free with every order
              </p>
              <div className="grid grid-cols-3 gap-3">
                {FREE_GIFTS.map((g) => (
                  <div key={g.label} className="flex flex-col items-center text-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: BLUE }}
                    >
                      <span style={{ color: '#111' }}>{g.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal">{g.label}</p>
                      <p className="text-[10px] text-mocha">{g.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selector */}
          <div>
            <p className="label-text mb-3" style={{ color: BLUE }}>Build Your Collection</p>
            <h1 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
              BeautiGel Starter Collection
            </h1>
            <p className="text-mocha text-sm leading-relaxed mb-8 max-w-md">
              Choose your bundle, pick your nail styles, and select your cuticle oil fragrance.
              Every order includes a free UV lamp, cuticle oil and free UK shipping.
            </p>

            {/* Step 1: Bundle */}
            <div className="mb-8">
              <p className="label-text text-charcoal mb-4">Step 1. Choose Your Bundle</p>
              <div className="space-y-3">
                {BUNDLES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleBundleChange(b.id)}
                    className={`w-full text-left rounded-2xl border p-4 transition-all ${
                      selectedBundle === b.id
                        ? 'border-charcoal bg-white'
                        : 'border-nude bg-white/60 hover:border-mocha'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* Radio */}
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selectedBundle === b.id ? 'border-charcoal' : 'border-nude'
                        }`}>
                          {selectedBundle === b.id && <div className="w-2 h-2 rounded-full bg-charcoal" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm text-charcoal uppercase tracking-wide">{b.label}</span>
                            {b.badge && (
                              <span
                                className="text-[9px] px-2 py-0.5 rounded-full tracking-widest uppercase font-bold text-white"
                                style={{ backgroundColor: b.badge === 'Best Value' ? '#b4cbe6' : '#111', color: b.badge === 'Best Value' ? '#111' : '#fff' }}
                              >
                                {b.badge}
                              </span>
                            )}
                          </div>
                          {b.saving && (
                            <p className="text-[10px] text-mocha mt-0.5">{b.saving}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-sm text-charcoal">{b.price}</p>
                        <p className="text-[10px] text-mocha">{b.perSet}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Wrap styles */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="label-text text-charcoal">
                  Step 2. Choose {requiredCount} Nail {requiredCount === 1 ? 'Style' : 'Styles'}
                </p>
                <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: selectedStyles.length === requiredCount ? '#111' : BLUE }}>
                  {selectedStyles.length} / {requiredCount} selected
                </span>
              </div>

              {/* Selected previews */}
              {selectedStyles.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {selectedStyles.map((id) => {
                    const style = WRAP_STYLES.find((s) => s.id === id)!
                    return (
                      <div key={id} className="flex flex-col items-center gap-1">
                        <div
                          className="w-12 h-12 rounded-full border-2 border-charcoal overflow-hidden"
                          style={{ backgroundColor: style.colour }}
                        >
                          {style.image && (
                            <Image src={style.image} alt={style.label} width={48} height={48} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <p className="text-[8px] text-mocha text-center max-w-[48px] leading-tight">{style.label}</p>
                      </div>
                    )
                  })}
                  {Array.from({ length: requiredCount - selectedStyles.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-12 h-12 rounded-full border-2 border-dashed border-nude flex items-center justify-center">
                      <span className="text-nude text-lg">+</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {WRAP_STYLES.map((style) => {
                  const isSelected = selectedStyles.includes(style.id)
                  const isDisabled = !isSelected && selectedStyles.length >= requiredCount
                  return (
                    <button
                      key={style.id}
                      onClick={() => toggleStyle(style.id)}
                      disabled={isDisabled}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl border text-xs tracking-wide transition-all text-left ${
                        isSelected
                          ? 'border-charcoal bg-white'
                          : isDisabled
                          ? 'border-nude/40 text-mocha/40 cursor-not-allowed bg-white/40'
                          : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal bg-white'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full shrink-0 border ${isSelected ? 'border-charcoal' : 'border-mocha/20'}`}
                        style={{ backgroundColor: style.colour }}
                      />
                      <span className={isSelected ? 'text-charcoal font-medium' : ''}>{style.label}</span>
                      {isSelected && (
                        <svg className="ml-auto shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Fragrance */}
            <div className="mb-10">
              <p className="label-text text-charcoal mb-4">Step 3. Cuticle Oil Fragrance</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FRAGRANCES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFragrance(f.id === fragrance ? null : f.id)}
                    className={`relative py-4 rounded-2xl border text-xs tracking-widest uppercase transition-all overflow-hidden ${
                      fragrance === f.id
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal bg-white'
                    }`}
                  >
                    <span
                      className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full opacity-60"
                      style={{ backgroundColor: f.colour }}
                    />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            {!isComplete && (
              <p className="text-mocha text-xs mb-3 tracking-wide">
                {selectedStyles.length < requiredCount
                  ? `Choose ${requiredCount - selectedStyles.length} more nail ${requiredCount - selectedStyles.length === 1 ? 'style' : 'styles'}`
                  : !fragrance
                  ? 'Select a cuticle oil fragrance to continue'
                  : ''}
              </p>
            )}
            <button
              onClick={handleAdd}
              disabled={!isComplete || adding}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {adding
                ? 'Adding to Bag...'
                : isComplete
                ? `Add to Bag · ${activeBundle.price}`
                : 'Complete Your Selections'}
            </button>

            <p className="text-mocha text-xs text-center mt-4">
              Free UV lamp, cuticle oil and UK shipping included with every order.
            </p>
          </div>
        </div>
      </section>

      {/* Circular video row */}
      <section className="section-padding border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <CircularVideoRow
            title="From Box to Beautiful"
            subtitle="How It Works"
            clips={VIDEO_CLIPS}
          />
        </div>
      </section>

      {/* Value comparison strip */}
      <section className="section-padding py-12 md:py-16 bg-nude/30 border-b border-nude/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text mb-2">Everything Included</p>
            <h2 className="section-heading text-xl md:text-2xl text-charcoal">What Is in Your Box.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Gel Nail Wrap Sets',
                detail: 'Your choice of style · 16 wraps per kit',
                note: '2, 3 or 4 sets depending on your bundle',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="3" x2="9" y2="9"/>
                    <line x1="15" y1="3" x2="15" y2="9"/>
                  </svg>
                ),
              },
              {
                label: 'UV Lamp',
                detail: 'Cures in 60 seconds per coat',
                note: 'Compact, plug-in, reusable',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="4"/>
                    <path d="M12 14v4"/>
                    <path d="M9 18h6"/>
                    <path d="M9 6.5A4 4 0 0 1 16 10"/>
                  </svg>
                ),
              },
              {
                label: 'Nourishing Cuticle Oil',
                detail: 'Strawberry, Peach, Lavender or Rose',
                note: 'Enriched with vitamins and keratin',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
                    <path d="M12 10v11"/>
                    <path d="M9 21h6"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-nude rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#b4cbe620' }}>
                  {item.icon}
                </div>
                <div>
                  <p className="section-heading text-sm text-charcoal mb-1">{item.label}</p>
                  <p className="text-xs text-charcoal/70 mb-1">{item.detail}</p>
                  <p className="text-[10px] tracking-wide text-mocha">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to link */}
      <section className="section-padding py-10 bg-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-mocha text-sm">
            New to gel nail wraps?{' '}
            <Link href="/how-to" className="text-charcoal underline underline-offset-2 hover:opacity-70 transition-opacity">
              See our step-by-step application guide
            </Link>
          </p>
        </div>
      </section>

    </div>
  )
}
