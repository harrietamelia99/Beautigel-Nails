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
    sublabel: 'Most Popular',
    price: '£29.99',
    perSet: '£14.99 per set',
    badge: 'Most Popular',
    note: null,
  },
  {
    id: '3-sets',
    count: 3,
    label: 'Any 3 Sets',
    sublabel: 'Best Value',
    price: '£39.99',
    perSet: '£13.33 per set',
    badge: 'Best Value',
    note: null,
  },
  {
    id: '4-sets',
    count: 4,
    label: 'Any 4 Sets',
    sublabel: 'Ultimate Collection',
    price: '£49.99',
    perSet: '£12.50 per set',
    badge: 'Ultimate Collection',
    note: null,
  },
]

const WRAP_STYLES = [
  { id: 'black-french-tip', label: 'Black French Tip', colour: '#1C1C1C', image: '/products/black-french-tip.png' },
  { id: 'candy-apple-red-glitter', label: 'Candy Apple Red Glitter', colour: '#B22222', image: '/products/candy-apple-red.png' },
  { id: 'cappuccino', label: 'Cappuccino', colour: '#C4A882', image: '/products/cappuccino.png' },
  { id: 'cherry-blossom', label: 'Cherry Blossom', colour: '#F4A7B9', image: '/products/cherry-blossom.png' },
  { id: 'coffee-and-cream-ombre', label: 'Coffee and Cream', colour: '#C4956A', image: '/products/coffee-and-cream.png' },
  { id: 'colour-pop-tips', label: 'Colour Pop Tips', colour: '#E8C4B8', image: '/products/colour-pop-tips.png' },
  { id: 'coral-glow', label: 'Coral Glow', colour: '#F4A7B9', image: '/products/coral-glow.png' },
  { id: 'daisy-dream', label: 'Daisy Dream', colour: '#F9A8D4', image: '/products/daisy-dream.png' },
  { id: 'fine-wine-gloss', label: 'Fine Wine Gloss', colour: '#9B1B5A', image: '/products/fine-wine-gloss.png' },
  { id: 'floral-bloom', label: 'Floral Bloom', colour: '#F9C6D0', image: '/products/floral-bloom.png' },
  { id: 'french-check-affair', label: 'French Check Affair', colour: '#E8DDD5', image: '/products/french-check-affair.png' },
  { id: 'golden-luxe', label: 'Golden Luxe', colour: '#D4AF6A', image: '/products/golden-luxe.png' },
  { id: 'lavender-love', label: 'Lavender Love', colour: '#B57FD6', image: '/products/lavender-love.png' },
  { id: 'lilac-cloud', label: 'Lilac Cloud', colour: '#C3B1E1', image: '/products/lilac-cloud.png' },
  { id: 'noir-swirl', label: 'Noir Swirl', colour: '#1C1C1C', image: '/products/noir-swirl.png' },
  { id: 'pastel-opulence', label: 'Pastel Opulence', colour: '#F2C4CE', image: '/products/pastel-opulence.png' },
  { id: 'radiant-rouge', label: 'Radiant Rouge', colour: '#CC0000', image: '/products/radiant-rouge.png' },
  { id: 'rainbow-dream', label: 'Rainbow Dream', colour: '#A8D8EA', image: '/products/rainbow-dream.png' },
  { id: 'rose-petal-blush', label: 'Rose Petal Blush', colour: '#E8B4C0', image: '/products/rose-petal-blush.png' },
  { id: 'ruby-radiance', label: 'Ruby Radiance', colour: '#9B111E', image: '/products/ruby-radiance.png' },
  { id: 'sugarpink-glitter-bomb', label: 'Sugarpink Glitter Bomb', colour: '#F4B8C8', image: '/products/sugarpink-glitter-bomb.png' },
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="4"/>
        <path d="M12 13v5"/>
        <path d="M9 18h6"/>
        <path d="M8 7A4 4 0 0 1 16 9"/>
      </svg>
    ),
    label: 'UV Lamp',
    rrp: '£21.00',
    sub: 'Cures in 60 seconds',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
        <path d="M12 10v11"/>
        <path d="M9 21h6"/>
      </svg>
    ),
    label: 'Cuticle Oil',
    rrp: '£12.00',
    sub: 'Your choice of fragrance',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="m16 8 4-1v10l-4 1"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'UK Shipping',
    rrp: '£3.99',
    sub: 'Every order',
  },
]

const VIDEO_CLIPS = [
  { label: 'Unbox Your Kit', gradient: 'linear-gradient(135deg, #f4e8dc 0%, #e8d0c0 100%)' },
  { label: 'Apply and Smooth', gradient: 'linear-gradient(135deg, #b4cbe6 0%, #8aafd4 100%)' },
  { label: 'Cure Under Lamp', gradient: 'linear-gradient(135deg, #c4a8e0 0%, #b4cbe6 100%)' },
  { label: 'Finished Manicure', gradient: 'linear-gradient(135deg, #f4a7b9 0%, #e8849a 100%)' },
  { label: 'Gentle Removal', gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)' },
]

const HOW_TO = {
  apply: [
    { n: '1', title: 'Prep', body: 'Push back cuticles, lightly buff the nail surface and wipe clean with an alcohol pad.' },
    { n: '2', title: 'Size and Apply', body: 'Select the closest-fitting wrap, peel and apply from the cuticle outward, pressing firmly from the centre out.' },
    { n: '3', title: 'Cure', body: 'Cure under your UV lamp for 60 to 90 seconds per nail.' },
    { n: '4', title: 'File and Finish', body: 'File away any excess at the tip. Your manicure is complete.' },
  ],
  remove: [
    { n: '1', title: 'Loosen the Edge', body: 'Gently press an orange stick or cuticle tool beneath the edge of the wrap.' },
    { n: '2', title: 'Peel Slowly', body: 'Peel back slowly from the cuticle end. Do not force or pull sharply.' },
    { n: '3', title: 'Nourish', body: 'Apply cuticle oil to nourish and condition the nail after removal.' },
  ],
}

export default function StarterKitPage() {
  const [selectedBundle, setSelectedBundle] = useState('3-sets')
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [fragrance, setFragrance] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [howToTab, setHowToTab] = useState<'apply' | 'remove'>('apply')
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

      {/* Hero — two column */}
      <section className="section-padding pt-8 pb-12 md:pb-16 border-b border-nude/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: image + free gifts */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden mb-5">
              <Image
                src="/products/starter-kit.png"
                alt="BeautiGel Nails Starter Collection"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Free gifts */}
            <div className="bg-white border border-nude rounded-2xl p-5">
              <p className="text-[9px] tracking-widest uppercase text-charcoal font-semibold mb-5 text-center">
                Free with every bundle order
              </p>
              <div className="grid grid-cols-3 gap-4">
                {FREE_GIFTS.map((g) => (
                  <div key={g.label} className="flex flex-col items-center text-center gap-2.5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: BLUE }}
                    >
                      <span style={{ color: '#111' }}>{g.icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-charcoal font-semibold">Free</p>
                      <p className="text-xs font-medium text-charcoal mt-0.5">{g.label}</p>
                      <p className="text-[10px] text-mocha/50 line-through">{g.rrp}</p>
                      <p className="text-[9px] text-mocha mt-0.5 leading-snug">{g.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: selector */}
          <div>
            <p className="label-text mb-2" style={{ color: BLUE }}>Build Your Collection</p>
            <h1 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
              BeautiGel Starter Collection
            </h1>
            <p className="text-mocha text-sm leading-relaxed mb-8 max-w-md">
              Choose your bundle size, select your nail styles, and pick your cuticle oil scent.
              Free UV lamp, cuticle oil and UK shipping included with every order.
            </p>

            {/* Step 1: Bundle size */}
            <div className="mb-8">
              <p className="label-text text-charcoal mb-4">1. Choose Your Bundle</p>

              {/* Bundle grid */}
              <div className="grid grid-cols-2 gap-3">
                {BUNDLES.map((b) => {
                  const isActive = selectedBundle === b.id
                  const isBestValue = b.badge === 'Best Value'
                  const isMostPop = b.badge === 'Most Popular'
                  return (
                    <button
                      key={b.id}
                      onClick={() => handleBundleChange(b.id)}
                      className={`relative text-left rounded-2xl border p-4 transition-all ${
                        isActive
                          ? 'border-charcoal bg-white shadow-sm'
                          : 'border-nude bg-white/60 hover:border-mocha/60'
                      }`}
                    >
                      {b.badge && (
                        <span
                          className="absolute -top-2.5 left-3 text-[8px] px-2.5 py-0.5 rounded-full tracking-widest uppercase font-bold"
                          style={{
                            backgroundColor: isBestValue ? BLUE : isMostPop ? '#111' : '#d4c5b0',
                            color: isBestValue ? '#111' : '#fff',
                          }}
                        >
                          {b.badge}
                        </span>
                      )}
                      <p className="text-sm font-semibold text-charcoal mb-0.5 mt-1">{b.label}</p>
                      <p className="text-xl font-light text-charcoal mb-1">{b.price}</p>
                      <p className="text-[10px] text-mocha tracking-wide">{b.perSet}</p>
                      {b.note && (
                        <p className="text-[9px] text-mocha/60 mt-1 italic">{b.note}</p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Choose designs — dashed slot boxes */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="label-text text-charcoal">
                  2. Choose {requiredCount} Nail {requiredCount === 1 ? 'Style' : 'Styles'}
                </p>
                <span
                  className="text-[10px] tracking-widest uppercase font-medium"
                  style={{ color: selectedStyles.length === requiredCount ? '#111' : BLUE }}
                >
                  {selectedStyles.length} / {requiredCount}
                </span>
              </div>

              {/* Design slots */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {Array.from({ length: requiredCount }).map((_, i) => {
                  const id = selectedStyles[i]
                  const style = id ? WRAP_STYLES.find((s) => s.id === id) : null
                  return (
                    <div
                      key={i}
                      className={`shrink-0 w-16 flex flex-col items-center gap-1.5 ${style ? '' : 'opacity-80'}`}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center overflow-hidden transition-all ${
                          style
                            ? 'border-charcoal'
                            : 'border-dashed border-mocha/40'
                        }`}
                        style={style ? { backgroundColor: style.colour } : {}}
                      >
                        {style?.image ? (
                          <Image
                            src={style.image}
                            alt={style.label}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : style ? (
                          <div className="w-full h-full" style={{ backgroundColor: style.colour }} />
                        ) : (
                          <span className="text-mocha/40 text-xl font-light">+</span>
                        )}
                      </div>
                      <p className="text-[8px] text-mocha text-center leading-tight max-w-[60px]">
                        {style ? style.label : `Design ${i + 1}`}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Style picker grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {WRAP_STYLES.map((style) => {
                  const isSelected = selectedStyles.includes(style.id)
                  const isDisabled = !isSelected && selectedStyles.length >= requiredCount
                  return (
                    <button
                      key={style.id}
                      onClick={() => toggleStyle(style.id)}
                      disabled={isDisabled}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-xs tracking-wide transition-all text-left ${
                        isSelected
                          ? 'border-charcoal bg-white shadow-sm'
                          : isDisabled
                          ? 'border-nude/30 text-mocha/30 cursor-not-allowed bg-white/30'
                          : 'border-nude text-mocha hover:border-charcoal hover:text-charcoal bg-white'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full shrink-0 border ${isSelected ? 'border-charcoal' : 'border-mocha/20'}`}
                        style={{ backgroundColor: style.colour }}
                      />
                      <span className={`truncate ${isSelected ? 'text-charcoal font-medium' : ''}`}>
                        {style.label}
                      </span>
                      {isSelected && (
                        <svg className="ml-auto shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </button>
                  )
                })}
              </div>
              <p className="mt-3">
                <span className="inline-block bg-amber-50 border border-amber-300 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  More colours to be added soon.
                </span>
              </p>
            </div>

            {/* Step 3: Fragrance — only for bundles (not single set) */}
            <div className="mb-10">
              <p className="label-text text-charcoal mb-4">3. Cuticle Oil Fragrance</p>
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
                      className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full opacity-70"
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
                  ? `Choose ${requiredCount - selectedStyles.length} more nail ${requiredCount - selectedStyles.length === 1 ? 'style' : 'styles'} to continue`
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

            {/* In stock indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              <p className="text-mocha text-xs tracking-wide">In stock and ready to ship</p>
            </div>

            <p className="text-mocha text-[10px] text-center mt-3 tracking-wide">
              Free UV lamp (worth £21) · cuticle oil (worth £12) · UK shipping included
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

      {/* How to apply / remove tabs */}
      <section className="section-padding py-14 md:py-20 border-b border-nude/60">
        <div className="max-w-4xl mx-auto">
          {/* Tab header */}
          <div className="flex items-center gap-8 mb-10 border-b border-nude">
            {(['apply', 'remove'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setHowToTab(tab)}
                className={`pb-3 text-sm tracking-widest uppercase font-semibold transition-colors relative ${
                  howToTab === tab
                    ? 'text-charcoal after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-charcoal'
                    : 'text-mocha hover:text-charcoal'
                }`}
              >
                How to {tab === 'apply' ? 'Apply' : 'Remove'}
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_TO[howToTab].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: BLUE, color: '#111' }}
                >
                  {step.n}
                </div>
                <div>
                  <p className="section-heading text-sm text-charcoal mb-1">{step.title}</p>
                  <p className="text-mocha text-xs leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/how-to"
              className="text-xs tracking-widest uppercase text-charcoal underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              See the Full Application Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What is in your box */}
      <section className="section-padding py-14 md:py-16 bg-nude/30 border-b border-nude/60">
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                note: 'Compact, plug-in, reusable · worth £21',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="4"/>
                    <path d="M12 13v5"/>
                    <path d="M9 18h6"/>
                    <path d="M8 7A4 4 0 0 1 16 9"/>
                  </svg>
                ),
              },
              {
                label: 'Nourishing Cuticle Oil',
                detail: 'Strawberry, Peach, Lavender or Rose',
                note: 'Enriched with vitamins and keratin · worth £12',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Bottom CTA */}
      <section className="section-padding py-10 bg-ivory">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-mocha text-sm mb-1">New to BeautiGel?</p>
          <p className="text-mocha text-xs mb-5 opacity-70">
            Not sure where to start? The 2-set bundle is our most popular choice for first-time customers.
          </p>
          <button
            onClick={() => handleBundleChange('2-sets')}
            className="btn-secondary"
          >
            Start with 2 Sets
          </button>
        </div>
      </section>

    </div>
  )
}
