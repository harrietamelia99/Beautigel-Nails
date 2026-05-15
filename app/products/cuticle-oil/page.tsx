'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    inci: 'Vitis Vinifera Seed Oil',
    role: 'Deep conditioning',
    desc: 'Rich in linoleic acid and antioxidants. Softens and hydrates without leaving a greasy residue.',
    colour: '#c8e6c9',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 11C8 20 3 16 3 11a9 9 0 0 1 9-9z"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    name: 'Safflower Oil',
    inci: 'Carthamus Tinctorius Seed Oil',
    role: 'Moisture retention',
    desc: 'A lightweight emollient that locks in moisture and soothes dry, damaged cuticles.',
    colour: '#fff0c4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6 2 4 7 4 10c0 4 3 7 8 10 5-3 8-6 8-10 0-3-2-8-8-8z"/>
      </svg>
    ),
  },
  {
    name: 'Hydrolysed Keratin',
    inci: 'Hydrolyzed Keratin',
    role: 'Nail strengthening',
    desc: "The same protein nails are made of. Rebuilds and reinforces the nail's natural structure from within.",
    colour: '#b4cbe6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    name: 'Amino Acids',
    inci: 'Hydrolyzed Wheat Protein',
    role: 'Structural repair',
    desc: 'The building blocks of keratin. Work synergistically to support long-term nail resilience.',
    colour: '#e8ddd0',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        <path d="M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/>
      </svg>
    ),
  },
  {
    name: 'Vitamin A',
    inci: 'Retinyl Palmitate',
    role: 'Cell renewal',
    desc: 'Encourages healthy nail cell turnover, promoting stronger, faster-growing nails.',
    colour: '#ffd8b4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    name: 'Vitamin D',
    inci: 'Cholecalciferol',
    role: 'Nail hardness',
    desc: 'Supports calcium absorption, which plays a key role in maintaining nail hardness and density.',
    colour: '#fff9c4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
      </svg>
    ),
  },
  {
    name: 'Vitamin B5',
    inci: 'Panthenol',
    role: 'Flexibility and shine',
    desc: 'Penetrates the nail plate to improve flexibility, prevent breakage and add a natural sheen.',
    colour: '#e8d8f0',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Vitamin E',
    inci: 'Tocopheryl Acetate',
    role: 'Antioxidant protection',
    desc: 'Protects the nail and surrounding skin from oxidative stress. A classic nail care hero.',
    colour: '#c8e8d8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

const FULL_INGREDIENTS = [
  { inci: 'Caprylic/Capric Triglyceride', note: null },
  { inci: 'Isopropyl Palmitate', note: null },
  { inci: 'Vitis Vinifera (Grape) Seed Oil', note: 'Grapeseed Oil' },
  { inci: 'Carthamus Tinctorius (Safflower) Seed Oil', note: 'Safflower Oil' },
  { inci: 'Simmondsia Chinensis (Jojoba) Seed Oil', note: null },
  { inci: 'Tocopheryl Acetate', note: 'Vitamin E' },
  { inci: 'Retinyl Palmitate', note: 'Vitamin A' },
  { inci: 'Cholecalciferol', note: 'Vitamin D' },
  { inci: 'Panthenol', note: 'Vitamin B5' },
  { inci: 'Hydrolyzed Keratin', note: 'Keratin' },
  { inci: 'Hydrolyzed Wheat Protein', note: 'Amino Acids' },
  { inci: 'Bisabolol', note: null },
  { inci: 'Phenoxyethanol', note: null },
  { inci: 'Ethylhexylglycerin', note: null },
  { inci: 'Parfum', note: 'Fragrance — available in Strawberry, Peach, Lavender, Rose' },
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

          {/* Product image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/products/cuticle-oil.png"
              alt="Beautigel Nourishing Cuticle Oil — Peach, Lavender, Strawberry and Rose"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
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
      <section className="section-padding py-14 md:py-20 border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: headline + intro */}
            <div>
              <p className="label-text mb-3">Formulated for Your Nails</p>
              <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-5">
                Why You Will Love It.
              </h2>
              <p className="text-mocha text-sm leading-relaxed mb-6">
                Most cuticle oils do one thing well. Ours is formulated to do four, working on the
                nail, the cuticle, the structure and the skin all at once so your routine stays
                simple without sacrificing results.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Grapeseed Oil', 'Safflower Oil', 'Keratin', 'Vitamins A, D, B5 + E'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-widest uppercase font-medium border border-nude px-3 py-1.5 rounded-full text-charcoal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: benefit cards */}
            <div className="grid grid-cols-2 gap-3">
              {BENEFITS.map((b) => (
                <div key={b.title} className="bg-white border border-nude rounded-2xl p-5 flex flex-col gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#b4cbe620' }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p className="section-heading text-sm text-charcoal mb-1">{b.title}</p>
                    <p className="text-mocha text-[11px] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Key ingredients visual */}
      <section className="section-padding py-14 md:py-20 bg-nude/30 border-b border-nude/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-text mb-2">What Is Inside</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal">Key Ingredients.</h2>
            <p className="text-mocha text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Every ingredient earns its place. Our formula combines botanical oils, structural
              proteins and targeted vitamins for nails that genuinely feel the difference.
            </p>
          </div>

          {/* Ingredient cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
            {KEY_INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                className="rounded-2xl p-5 flex flex-col gap-3 border border-nude/60 bg-white hover:shadow-sm transition-shadow group"
              >
                {/* Colour swatch + icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: ing.colour }}
                  >
                    <span style={{ color: '#5a5a5a' }}>{ing.icon}</span>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-xs leading-tight">{ing.name}</p>
                    <p className="text-[9px] tracking-widest uppercase text-mocha/60 mt-0.5">{ing.role}</p>
                  </div>
                </div>
                <p className="text-mocha text-[11px] leading-relaxed">{ing.desc}</p>
                <p className="text-[9px] tracking-wide text-mocha/40 italic leading-tight">{ing.inci}</p>
              </div>
            ))}
          </div>

          {/* Full ingredients accordion */}
          <div className="bg-white border border-nude rounded-2xl overflow-hidden">
            <button
              onClick={() => setIngredientsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-nude/20 transition-colors"
            >
              <div>
                <span className="text-[10px] tracking-widest uppercase text-charcoal font-semibold">Full Ingredients List</span>
                <p className="text-mocha text-xs mt-0.5">INCI Declaration</p>
              </div>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className={`text-mocha transition-transform duration-200 shrink-0 ml-4 ${ingredientsOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {ingredientsOpen && (
              <div className="border-t border-nude">
                <div className="px-6 pt-5 pb-6">
                  <p className="text-[9px] tracking-widest uppercase text-mocha/50 mb-4">
                    Ingredients are listed in descending order of concentration
                  </p>
                  <div className="space-y-2">
                    {FULL_INGREDIENTS.map((item, i) => (
                      <div
                        key={item.inci}
                        className="flex items-start gap-3 py-2 border-b border-nude/40 last:border-b-0"
                      >
                        <span className="text-[9px] text-mocha/30 font-mono w-5 shrink-0 mt-0.5">{i + 1}</span>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-charcoal">{item.inci}</span>
                          {item.note && (
                            <span className="text-[10px] text-mocha/60 ml-2 italic">{item.note}</span>
                          )}
                        </div>
                        {item.note && item.note !== 'Fragrance — available in Strawberry, Peach, Lavender, Rose' && (
                          <span
                            className="text-[8px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-full shrink-0"
                            style={{ backgroundColor: '#b4cbe620', color: '#5a7a8a' }}
                          >
                            Key
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-mocha/40 mt-4 italic">
                    Final INCI declaration to be confirmed by manufacturer prior to launch.
                  </p>
                </div>
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
