'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

const BLUE = '#b4cbe6'

const FREQUENCIES = [
  { id: '3w', label: 'Every 3 Weeks', sub: 'For nail lovers' },
  { id: '4w', label: 'Every 4 Weeks', sub: 'Most popular' },
  { id: '6w', label: 'Every 6 Weeks', sub: 'Relaxed schedule' },
  { id: '8w', label: 'Every 8 Weeks', sub: 'Occasional treat' },
]

const TIERS = [
  {
    id: 'essential',
    name: 'Essential',
    sets: 2,
    saving: 15,
    label: 'Any 2 Sets',
    rrpMonthly: '£29.99',
    subscriberPrice: '£25.49',
    badge: null,
    note: 'A great way to keep two styles in rotation.',
  },
  {
    id: 'signature',
    name: 'Signature',
    sets: 3,
    saving: 20,
    label: 'Any 3 Sets',
    rrpMonthly: '£39.99',
    subscriberPrice: '£31.99',
    badge: 'Most Popular',
    note: 'Our most popular membership. A new look every few weeks.',
  },
  {
    id: 'vip',
    name: 'VIP',
    sets: 4,
    saving: 25,
    label: 'Any 4 Sets',
    rrpMonthly: '£49.99',
    subscriberPrice: '£37.49',
    badge: null,
    note: 'The full collection experience. Maximum flexibility and savings.',
  },
]

const PERKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Subscriber Pricing',
    desc: 'Save up to 25% on every order, automatically applied at checkout.',
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
    title: 'Free UK Shipping',
    desc: 'Complimentary delivery on every subscription order, always.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    title: 'Flexible Schedule',
    desc: 'Choose delivery every 3, 4, 6 or 8 weeks to suit your lifestyle.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M10 15l5-3-5-3v6z"/>
      </svg>
    ),
    title: 'Early Access',
    desc: 'Be first to shop new launches and limited edition collections.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.364 5.636a9 9 0 1 1-12.728 0"/><path d="M12 2v7"/>
      </svg>
    ),
    title: 'Pause Anytime',
    desc: 'Going on holiday or taking a break? Pause with one click, no questions asked.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Priority Access',
    desc: 'Members get first access to limited collections before they sell out.',
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
]

const FAQS = [
  {
    q: 'Can I really cancel anytime?',
    a: 'Yes, completely. There are no minimum terms, no cancellation fees and no awkward exit flows. You can pause, skip or cancel from your account at any time.',
  },
  {
    q: 'Can I change my nail styles each delivery?',
    a: 'Absolutely. You choose your styles fresh each time, so every delivery can be completely different if you like.',
  },
  {
    q: 'What if I want to change my delivery frequency?',
    a: 'You can update your schedule at any time from your account. Switch between 3, 4, 6 or 8 week intervals whenever it suits you.',
  },
  {
    q: 'Is this the same as the Starter Kit?',
    a: 'No. The Starter Kit is a one-time first order that includes your UV lamp and cuticle oil to get you set up. The subscription is for returning customers who are already equipped and want to keep their nail supply topped up with member savings.',
  },
  {
    q: 'When will I be charged?',
    a: 'Your first payment is taken at checkout. Subsequent payments are taken automatically based on your chosen delivery frequency, a few days before your order is dispatched.',
  },
]

export default function SubscribePage() {
  const [frequency, setFrequency] = useState('4w')
  const [tier, setTier] = useState('signature')
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activeTier = TIERS.find((t) => t.id === tier)!
  const requiredCount = activeTier.sets

  const toggleStyle = (id: string) => {
    setSelectedStyles((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id)
      if (prev.length >= requiredCount) return prev
      return [...prev, id]
    })
  }

  const handleTierChange = (id: string) => {
    setTier(id)
    setSelectedStyles([])
  }

  const isComplete = selectedStyles.length === requiredCount
  const freqLabel = FREQUENCIES.find((f) => f.id === frequency)?.label ?? ''

  return (
    <div className="bg-ivory min-h-screen">

      {/* Breadcrumb */}
      <div className="section-padding pt-24 md:pt-32 pb-0">
        <nav className="flex items-center gap-2 text-xs text-mocha tracking-wide max-w-7xl mx-auto">
          <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-charcoal">Subscribe and Save</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding pt-10 pb-16 md:pb-20 border-b border-nude/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-text mb-3" style={{ color: BLUE }}>Member Savings</p>
          <h1 className="section-heading text-3xl md:text-4xl text-charcoal mb-5">
            Luxury Gel Nails Delivered Your Way.
          </h1>
          <p className="text-mocha text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Join our monthly nail membership and receive your favourite gel wrap sets delivered
            straight to your door. Flexible scheduling, exclusive member pricing and free UK
            shipping on every order.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Pause anytime', 'Skip anytime', 'Cancel anytime', 'No hidden fees'].map((pill) => (
              <span
                key={pill}
                className="text-[9px] tracking-widest uppercase font-medium border border-nude px-3 py-1.5 rounded-full text-charcoal"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main selector */}
      <section className="section-padding py-14 md:py-20 border-b border-nude/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: image placeholder + perks summary */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden mb-5">
              <Image
                src="/lifestyle/subscribe-calendar.png"
                alt="BeautiGel subscription — new nail set delivered every month"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Saving summary card */}
            <div className="bg-white border border-nude rounded-2xl p-5">
              <p className="text-[9px] tracking-widest uppercase text-charcoal font-semibold mb-4">
                Your Subscriber Pricing
              </p>
              <div className="space-y-3">
                {TIERS.map((t) => (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between py-2 border-b border-nude/50 last:border-0 transition-opacity ${tier === t.id ? 'opacity-100' : 'opacity-40'}`}
                  >
                    <div>
                      <p className="text-xs font-medium text-charcoal">{t.name} · {t.label}</p>
                      <p className="text-[10px] text-mocha">Save {t.saving}% on every order</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-charcoal">{t.subscriberPrice}</p>
                      <p className="text-[10px] text-mocha/50 line-through">{t.rrpMonthly}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: selectors */}
          <div>
            <p className="label-text mb-2" style={{ color: BLUE }}>Build Your Membership</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
              BeautiGel Membership
            </h2>
            <p className="text-mocha text-sm leading-relaxed mb-8 max-w-md">
              Choose how often you want your nails delivered, select your membership tier and
              pick your styles. You can update everything at any time.
            </p>

            {/* Step 1: Frequency */}
            <div className="mb-8">
              <p className="label-text text-charcoal mb-4">1. Choose Your Delivery Frequency</p>
              <div className="grid grid-cols-2 gap-3">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    className={`text-left rounded-2xl border p-4 transition-all ${
                      frequency === f.id
                        ? 'border-charcoal bg-white shadow-sm'
                        : 'border-nude bg-white/60 hover:border-mocha/60'
                    }`}
                  >
                    <p className="text-sm font-semibold text-charcoal">{f.label}</p>
                    <p className="text-[10px] text-mocha tracking-wide mt-0.5">{f.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tier */}
            <div className="mb-8">
              <p className="label-text text-charcoal mb-4">2. Choose Your Membership Tier</p>
              <div className="space-y-3">
                {TIERS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTierChange(t.id)}
                    className={`relative w-full text-left rounded-2xl border p-4 transition-all ${
                      tier === t.id
                        ? 'border-charcoal bg-white shadow-sm'
                        : 'border-nude bg-white/60 hover:border-mocha/60'
                    }`}
                  >
                    {t.badge && (
                      <span
                        className="absolute -top-2.5 left-3 text-[8px] px-2.5 py-0.5 rounded-full tracking-widest uppercase font-bold text-white"
                        style={{ backgroundColor: '#111' }}
                      >
                        {t.badge}
                      </span>
                    )}
                    <div className="flex items-center justify-between gap-4 mt-0.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          tier === t.id ? 'border-charcoal' : 'border-nude'
                        }`}>
                          {tier === t.id && <div className="w-2 h-2 rounded-full bg-charcoal" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal">{t.name} · {t.label}</p>
                          <p className="text-[10px] text-mocha mt-0.5">{t.note}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-base font-light text-charcoal">{t.subscriberPrice}</p>
                        <p className="text-[10px] text-mocha/50 line-through">{t.rrpMonthly}</p>
                        <p
                          className="text-[9px] tracking-widest uppercase font-semibold mt-0.5"
                          style={{ color: BLUE }}
                        >
                          Save {t.saving}%
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Styles */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="label-text text-charcoal">
                  3. Choose {requiredCount} Nail {requiredCount === 1 ? 'Style' : 'Styles'}
                </p>
                <span
                  className="text-[10px] tracking-widest uppercase font-medium"
                  style={{ color: selectedStyles.length === requiredCount ? '#111' : BLUE }}
                >
                  {selectedStyles.length} / {requiredCount}
                </span>
              </div>

              {/* Slot previews */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {Array.from({ length: requiredCount }).map((_, i) => {
                  const id = selectedStyles[i]
                  const style = id ? WRAP_STYLES.find((s) => s.id === id) : null
                  return (
                    <div key={i} className="shrink-0 w-14 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all ${
                          style ? 'border-charcoal' : 'border-dashed border-mocha/40'
                        }`}
                        style={style ? { backgroundColor: style.colour } : {}}
                      >
                        {style?.image ? (
                          <Image src={style.image} alt={style.label} width={56} height={56} className="w-full h-full object-cover" />
                        ) : style ? (
                          <div className="w-full h-full" style={{ backgroundColor: style.colour }} />
                        ) : (
                          <span className="text-mocha/40 text-lg font-light">+</span>
                        )}
                      </div>
                      <p className="text-[8px] text-mocha text-center leading-tight max-w-[52px]">
                        {style ? style.label : `Style ${i + 1}`}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {WRAP_STYLES.map((style) => {
                  const isSelected = selectedStyles.includes(style.id)
                  const isDisabled = !isSelected && selectedStyles.length >= requiredCount
                  return (
                    <button
                      key={style.id}
                      onClick={() => toggleStyle(style.id)}
                      disabled={isDisabled}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs tracking-wide transition-all text-left ${
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
                      <span className={`truncate ${isSelected ? 'text-charcoal font-medium' : ''}`}>{style.label}</span>
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

            {/* CTA */}
            {!isComplete && (
              <p className="text-mocha text-xs mb-3 tracking-wide">
                Choose {requiredCount - selectedStyles.length} more nail {requiredCount - selectedStyles.length === 1 ? 'style' : 'styles'} to continue
              </p>
            )}
            <button
              disabled={!isComplete}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isComplete
                ? `Subscribe · ${activeTier.subscriberPrice} · ${freqLabel}`
                : 'Complete Your Selections'}
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              <p className="text-mocha text-xs tracking-wide">Pause, skip or cancel anytime from your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member perks */}
      <section className="section-padding py-14 md:py-20 bg-nude/30 border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text mb-2">Why Subscribe</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">
              The BeautiGel Member Experience.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((perk) => (
              <div key={perk.title} className="bg-white border border-nude rounded-2xl p-6 flex gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#b4cbe620' }}
                >
                  <span style={{ color: BLUE }}>{perk.icon}</span>
                </div>
                <div>
                  <p className="section-heading text-sm text-charcoal mb-1">{perk.title}</p>
                  <p className="text-mocha text-xs leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency section */}
      <section className="section-padding py-14 md:py-20 border-b border-nude/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text mb-2">Full Flexibility</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">
              Always In Control.
            </h2>
            <p className="text-mocha text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              We believe subscriptions should work around you, not the other way around. There are
              no traps, no minimum terms and no awkward cancellations. Full stop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                action: 'Pause',
                desc: 'Going on holiday or taking a break? Pause your subscription with one click and resume whenever you are ready.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                  </svg>
                ),
              },
              {
                action: 'Skip',
                desc: 'Not ready for your next delivery? Skip a month without cancelling. Your subscription simply picks up the following cycle.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>
                  </svg>
                ),
              },
              {
                action: 'Cancel',
                desc: 'Changed your mind? Cancel at any time directly from your account. No email required, no fees, no questions asked.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.action} className="bg-white border border-nude rounded-2xl p-7 text-center flex flex-col items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#b4cbe620' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="section-heading text-lg text-charcoal mb-2">{item.action} Anytime</p>
                  <p className="text-mocha text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding py-14 md:py-20 bg-nude/20 border-b border-nude/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text mb-2">Common Questions</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">
              Good to Know.
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-nude rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-nude/10 transition-colors"
                >
                  <span className="text-sm font-medium text-charcoal pr-4">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className={`text-mocha transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-nude">
                    <p className="text-mocha text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding py-12 bg-ivory">
        <div className="max-w-xl mx-auto text-center">
          <p className="label-text mb-3" style={{ color: BLUE }}>Ready to Join?</p>
          <h3 className="section-heading text-xl md:text-2xl text-charcoal mb-3">
            Never Run Out of Your Favourite Sets.
          </h3>
          <p className="text-mocha text-sm mb-6 leading-relaxed">
            New to BeautiGel? Start with the Starter Kit to get your UV lamp and cuticle oil,
            then subscribe when you are ready to keep your nail supply topped up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="btn-primary">
              Start Your Membership
            </Link>
            <Link href="/products/starter-kit" className="btn-secondary">
              Try the Starter Kit First
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
