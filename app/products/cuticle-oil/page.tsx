'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { CircularVideoRow } from '@/components/ui/CircularVideoRow'

const BLUE = '#b4cbe6'

const FRAGRANCES = [
  { id: 'strawberry', label: 'Strawberry', colour: '#f4a7b9' },
  { id: 'peach', label: 'Peach', colour: '#ffc89a' },
  { id: 'lavender', label: 'Lavender', colour: '#c4a8e0' },
  { id: 'rose', label: 'Rose', colour: '#e8849a' },
]

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: 'Nourishing Oils',
    desc: 'Grapeseed and safflower oil deeply condition and soften cuticles with every application.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    title: 'Vitamin Enriched',
    desc: 'A blend of vitamins A, D, B5 and E supports healthy nail growth and protects against brittleness.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Keratin Support',
    desc: 'Keratin and amino acids fortify the nail structure, helping to rebuild strength over time.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Daily Hydration',
    desc: 'Light, fast-absorbing formula designed for daily use. Keeps nails and cuticles healthy between manicures.',
  },
]

const KEY_INGREDIENTS = [
  {
    name: 'Grapeseed Oil',
    role: 'Deep conditioning',
    desc: 'Rich in linoleic acid, grapeseed oil softens and hydrates without leaving a greasy residue.',
    colour: '#c8e6c9',
  },
  {
    name: 'Safflower Oil',
    role: 'Moisture retention',
    desc: 'A lightweight emollient that locks in moisture and soothes dry, damaged cuticles.',
    colour: '#fff9c4',
  },
  {
    name: 'Keratin',
    role: 'Nail strengthening',
    desc: "The same protein that nails are made of. Helps rebuild and reinforce the nail's natural structure.",
    colour: '#b4cbe6',
  },
  {
    name: 'Amino Acids',
    role: 'Structural repair',
    desc: 'The building blocks of keratin. Work alongside keratin to support long-term nail resilience.',
    colour: '#d4c5b0',
  },
  {
    name: 'Vitamin A',
    role: 'Cell renewal',
    desc: 'Encourages healthy nail cell turnover, promoting stronger, faster-growing nails.',
    colour: '#ffccbc',
  },
  {
    name: 'Vitamin D',
    role: 'Nail hardness',
    desc: 'Supports calcium absorption, which plays a key role in maintaining nail hardness.',
    colour: '#fff9c4',
  },
  {
    name: 'Vitamin B5',
    role: 'Flexibility & shine',
    desc: 'Panthenol penetrates the nail to improve flexibility and add a natural-looking sheen.',
    colour: '#e1bee7',
  },
  {
    name: 'Vitamin E',
    role: 'Antioxidant protection',
    desc: 'Protects the nail and surrounding skin from oxidative stress. A classic nail care staple.',
    colour: '#b2dfdb',
  },
]

const VIDEO_CLIPS = [
  { label: 'Apply the Oil', gradient: 'linear-gradient(135deg, #ffc89a 0%, #f4a7b9 100%)' },
  { label: 'Massage In', gradient: 'linear-gradient(135deg, #c4a8e0 0%, #b4cbe6 100%)' },
  { label: 'Daily Ritual', gradient: 'linear-gradient(135deg, #e8849a 0%, #c4956a 100%)' },
  { label: 'Finished Look', gradient: 'linear-gradient(135deg, #d4c5b0 0%, #b09880 100%)' },
]

export default function CuticleOilPage() {
  const [fragrance, setFragrance] = useState<string | null>(null)
  const [ingredientsOpen, setIngredientsOpen] = useState(false)
  const [adding, setAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAdd = async () => {
    if (!fragrance || adding) return
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
          <span className="text-charcoal">Cuticle Oil</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding py-12 md:py-16 border-b border-nude/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Placeholder image */}
          <div
            className="rounded-2xl w-full aspect-square flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #f4e8dc 0%, #e8d0c0 50%, #b4cbe6 100%)' }}
          >
            <div className="text-center px-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-60">
                <path d="M8 3h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
                <path d="M12 10v11"/>
                <path d="M9 21h6"/>
              </svg>
              <p className="text-[10px] tracking-widest uppercase text-mocha/60">Kiana to provide image</p>
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <p className="label-text mb-3" style={{ color: BLUE }}>Nail Care</p>
            <h1 className="section-heading text-2xl md:text-3xl text-charcoal mb-3">
              Nourishing Cuticle Oil
            </h1>
            <p className="text-mocha text-sm leading-relaxed mb-6 max-w-md">
              A daily cuticle and nail oil enriched with grapeseed oil, keratin, amino acids and
              vitamins. Designed to hydrate, strengthen and protect your natural nails between
              manicures.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl font-light text-charcoal">[PRICE TBC]</span>
              <span className="text-[10px] tracking-widest uppercase text-mocha bg-nude px-3 py-1 rounded-full">
                Vegan · Cruelty-Free
              </span>
            </div>

            {/* Fragrance */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="label-text text-charcoal">
                  Fragrance
                  {fragrance && (
                    <span className="normal-case tracking-normal font-normal text-mocha ml-2">
                      · {FRAGRANCES.find((f) => f.id === fragrance)?.label}
                    </span>
                  )}
                </p>
                {!fragrance && (
                  <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: BLUE }}>Select one</span>
                )}
              </div>
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
            <button
              onClick={handleAdd}
              disabled={!fragrance || adding}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed mb-4"
            >
              {adding ? 'Adding...' : fragrance ? 'Add to Bag' : 'Select a Fragrance'}
            </button>

            {/* Quick benefits */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {['Strengthens nails', 'Softens cuticles', 'Daily use formula', 'Fast absorbing'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-mocha">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: BLUE }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding py-12 md:py-16 border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text mb-2">Formulated for Your Nails</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">Why You Will Love It.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white border border-nude rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#b4cbe620' }}>
                  {b.icon}
                </div>
                <div>
                  <p className="section-heading text-sm text-charcoal mb-1">{b.title}</p>
                  <p className="text-mocha text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key ingredients visual */}
      <section className="section-padding py-12 md:py-16 bg-nude/30 border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text mb-2">What Is Inside</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">Key Ingredients.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {KEY_INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                className="rounded-2xl p-5 flex flex-col gap-2 border border-nude/60"
                style={{ backgroundColor: ing.colour + '40' }}
              >
                <div
                  className="w-8 h-8 rounded-full mb-1"
                  style={{ backgroundColor: ing.colour }}
                />
                <p className="text-charcoal font-semibold text-sm">{ing.name}</p>
                <p className="text-[10px] tracking-widest uppercase text-mocha font-medium">{ing.role}</p>
                <p className="text-mocha text-xs leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>

          {/* Full ingredients accordion */}
          <div className="mt-8 bg-white border border-nude rounded-2xl overflow-hidden">
            <button
              onClick={() => setIngredientsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-nude/20 transition-colors"
            >
              <span className="text-[10px] tracking-widest uppercase text-charcoal font-semibold">Full Ingredients List</span>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`text-mocha transition-transform duration-200 ${ingredientsOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {ingredientsOpen && (
              <div className="px-6 pb-5 border-t border-nude">
                <p className="text-mocha text-xs leading-relaxed pt-4 italic">
                  Full ingredients list to be provided by client. [TBC]
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Circular video row */}
      <section className="section-padding border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <CircularVideoRow
            title="Your Daily Nail Ritual"
            subtitle="See It In Action"
            clips={VIDEO_CLIPS}
          />
        </div>
      </section>

      {/* CTA footer */}
      <section className="section-padding py-10 bg-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-mocha text-sm mb-4">
            Best used alongside Beautigel gel nail wraps for a complete nail care routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="btn-primary">Shop Gel Wraps</Link>
            <Link href="/products/starter-kit" className="btn-secondary">View Starter Collection</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
