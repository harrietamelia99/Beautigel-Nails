const CALLOUTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    stat: 'Up to 4 Weeks',
    label: 'Wear Time',
    body: 'UV curing fully sets the gel, creating a bond that far outlasts non-cured alternatives.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    stat: 'Protective',
    label: 'Shell Over Your Natural Nail',
    body: 'The hardened layer acts as a shield, ideal for nails recovering from acrylics or damage.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    stat: 'Salon-Grade',
    label: 'Finish Every Time',
    body: 'Curing is what gives gel its signature high-gloss, chip-resistant finish. No shortcuts.',
  },
]

const ROWS = [
  {
    attribute: 'Wear Time',
    beautigel: 'Up to 4 weeks',
    nonUV: '1–2 weeks',
    salon: '2–3 weeks',
  },
  {
    attribute: 'Application Time',
    beautigel: '20–30 min at home',
    nonUV: '10–15 min at home',
    salon: '60–90 min in salon',
  },
  {
    attribute: 'Finish',
    beautigel: 'High-gloss, chip-resistant',
    nonUV: 'Softer, less durable',
    salon: 'High-gloss',
  },
  {
    attribute: 'Nail Protection',
    beautigel: 'Hard shell supports natural nail',
    nonUV: 'Minimal protective layer',
    salon: 'None — applied direct',
  },
  {
    attribute: 'Post-Acrylic Suitability',
    beautigel: 'Ideal',
    nonUV: 'Limited',
    salon: 'Not recommended',
  },
  {
    attribute: 'Removal',
    beautigel: 'Gentle peel',
    nonUV: 'Gentle peel',
    salon: 'Acetone soak',
  },
  {
    attribute: 'At-Home Friendly',
    beautigel: 'Yes',
    nonUV: 'Yes',
    salon: 'No',
  },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function WhyUVGel() {
  return (
    <section className="section-py section-padding bg-nude/40 border-t border-nude/60">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="label-text mb-3" style={{ color: '#b4cbe6' }}>The Beautigel Difference</p>
          <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-5">
            Why We Cure.
          </h2>
          <p className="text-mocha text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            UV-cured gel wraps are a deliberate choice, not a compromise. Where others are moving
            away from curing, we are doubling down. Because the science backs it, and our
            customers feel the difference.
          </p>
        </div>

        {/* Callout cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:mb-16">
          {CALLOUTS.map((c) => (
            <div key={c.label} className="bg-white border border-nude rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#b4cbe6' }}>
                <span style={{ color: '#111' }}>{c.icon}</span>
              </div>
              <div>
                <p className="section-heading text-xl text-charcoal mb-0.5">{c.stat}</p>
                <p className="text-[10px] tracking-widest uppercase text-mocha font-medium mb-3">{c.label}</p>
                <p className="text-mocha text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <p className="label-text mb-2">How Do We Compare</p>
            <h3 className="section-heading text-xl md:text-2xl text-charcoal">
              See the Difference for Yourself.
            </h3>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-nude">
            {/* Header row */}
            <div className="grid grid-cols-4 bg-white border-b border-nude">
              <div className="p-5" />
              <div className="p-5 text-center border-l border-nude" style={{ backgroundColor: '#b4cbe6' }}>
                <p className="section-heading text-sm text-charcoal">Beautigel</p>
                <p className="text-[10px] tracking-widest uppercase text-charcoal/60 mt-1">UV-Cured Gel Wraps</p>
              </div>
              <div className="p-5 text-center border-l border-nude bg-white">
                <p className="text-[10px] tracking-widest uppercase text-mocha font-semibold">Non-UV Gel Wraps</p>
              </div>
              <div className="p-5 text-center border-l border-nude bg-white">
                <p className="text-[10px] tracking-widest uppercase text-mocha font-semibold">Traditional Salon Gel</p>
              </div>
            </div>

            {/* Data rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.attribute}
                className={`grid grid-cols-4 border-b border-nude last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory/60'}`}
              >
                <div className="p-4 pl-5 flex items-center">
                  <span className="text-xs text-charcoal font-medium tracking-wide">{row.attribute}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-nude" style={{ backgroundColor: i % 2 === 0 ? '#b4cbe620' : '#b4cbe615' }}>
                  <span className="text-xs text-charcoal font-medium text-center">{row.beautigel}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-nude">
                  <span className="text-xs text-mocha text-center">{row.nonUV}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-nude">
                  <span className="text-xs text-mocha text-center">{row.salon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {ROWS.map((row) => (
              <div key={row.attribute} className="bg-white border border-nude rounded-2xl overflow-hidden">
                <div className="px-4 py-3 border-b border-nude bg-ivory/60">
                  <p className="text-[10px] tracking-widest uppercase text-charcoal font-semibold">{row.attribute}</p>
                </div>
                <div className="divide-y divide-nude">
                  <div className="px-4 py-3 flex items-center justify-between gap-4" style={{ backgroundColor: '#b4cbe615' }}>
                    <span className="text-[10px] tracking-widest uppercase text-charcoal/50 shrink-0">Beautigel</span>
                    <span className="text-xs text-charcoal font-medium text-right">{row.beautigel}</span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between gap-4">
                    <span className="text-[10px] tracking-widest uppercase text-mocha/60 shrink-0">Non-UV Wraps</span>
                    <span className="text-xs text-mocha text-right">{row.nonUV}</span>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between gap-4">
                    <span className="text-[10px] tracking-widest uppercase text-mocha/60 shrink-0">Salon Gel</span>
                    <span className="text-xs text-mocha text-right">{row.salon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial body — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-12">
          <div className="bg-white border border-nude rounded-2xl p-7 md:p-8">
            <p className="label-text mb-3 text-left">For Nails That Need to Recover</p>
            <h3 className="section-heading text-lg md:text-xl text-charcoal mb-4">
              Built for Post-Acrylic Nails.
            </h3>
            <p className="text-mocha text-sm leading-relaxed mb-3">
              If you have spent years in acrylics, you know what they leave behind: thin, fragile
              nails that break before they can grow. Our UV-cured wraps sit over the natural nail
              as a protective shell, letting it breathe and grow out underneath while still looking
              polished.
            </p>
            <p className="text-mocha text-sm leading-relaxed">
              For many of our customers, Beautigel is the first step in genuinely caring for their
              natural nails again.
            </p>
          </div>
          <div className="bg-white border border-nude rounded-2xl p-7 md:p-8">
            <p className="label-text mb-3 text-left">The Science Behind It</p>
            <h3 className="section-heading text-lg md:text-xl text-charcoal mb-4">
              Strength You Can See and Feel.
            </h3>
            <p className="text-mocha text-sm leading-relaxed mb-3">
              When gel is exposed to UV light, it undergoes photopolymerisation. The molecules
              link together to form a solid, durable layer. This is fundamentally different to a
              wrap that simply dries or self-adheres.
            </p>
            <p className="text-mocha text-sm leading-relaxed">
              The result is a finish that holds its shape, resists chipping, and stays flexible
              enough to move with your nail, lasting up to four weeks with correct application.
            </p>
          </div>
        </div>

        {/* UV Safety note */}
        <div className="bg-white border border-nude rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#b4cbe6' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="text-mocha text-xs leading-relaxed">
            <span className="text-charcoal font-semibold">A note on UV lamps. </span>
            Our lamps emit low-level UV light for a short, controlled curing cycle, typically
            60 seconds per coat. When used as directed, they are considered safe for regular home
            use. As with any UV exposure, we recommend keeping the lamp away from eyes during
            curing.
          </p>
        </div>

      </div>
    </section>
  )
}
