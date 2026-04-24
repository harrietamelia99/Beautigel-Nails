const CALLOUTS = [
  {
    stat: 'Up to 4 Weeks',
    label: 'Wear Time',
    body: 'UV curing fully sets the gel, creating a bond that far outlasts non-cured alternatives.',
  },
  {
    stat: 'Protective',
    label: 'Shell Over Your Natural Nail',
    body: 'The hardened layer acts as a shield — ideal for nails weakened by acrylics or damage.',
  },
  {
    stat: 'Salon-Grade',
    label: 'Finish Every Time',
    body: 'Curing is what gives gel its signature high-gloss, chip-resistant finish. No shortcuts.',
  },
]

export function WhyUVGel() {
  return (
    <section className="bg-charcoal text-ivory section-padding py-16 md:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-14 md:mb-20 items-end">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-blue-accent mb-4 font-medium">
              The Beautigel Difference
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-ivory font-bold uppercase tracking-wide leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why We Cure.
            </h2>
          </div>
          <div className="md:pb-1">
            <p className="text-ivory/70 text-sm md:text-base leading-relaxed">
              UV-cured gel wraps are a deliberate choice, not a compromise. Where others are moving
              away from curing, we are doubling down — because the science backs it, and our
              customers feel the difference.
            </p>
          </div>
        </div>

        {/* Callout cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-14 md:mb-20">
          {CALLOUTS.map((c) => (
            <div key={c.label} className="bg-charcoal p-8 md:p-10 flex flex-col gap-3">
              <p
                className="text-blue-accent text-2xl md:text-3xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {c.stat}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-ivory/40 font-medium">
                {c.label}
              </p>
              <p className="text-ivory/70 text-sm leading-relaxed mt-1">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Editorial body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-12 md:mb-16">
          <div>
            <h3
              className="text-xl md:text-2xl text-ivory font-bold mb-4 uppercase tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Made for Nails That Need to Recover.
            </h3>
            <p className="text-ivory/70 text-sm leading-relaxed mb-4">
              If you have spent years in acrylics, you know what they leave behind — thin, fragile
              nails that break before they can grow. Our UV-cured wraps sit over the natural nail as
              a protective shell, letting it breathe and grow out underneath while still looking
              polished.
            </p>
            <p className="text-ivory/70 text-sm leading-relaxed">
              This is not just a nail product. For many of our customers, it is the first step in
              genuinely caring for their natural nails again.
            </p>
          </div>
          <div>
            <h3
              className="text-xl md:text-2xl text-ivory font-bold mb-4 uppercase tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Strength You Can See and Feel.
            </h3>
            <p className="text-ivory/70 text-sm leading-relaxed mb-4">
              When gel is exposed to UV light, it undergoes a chemical process called
              photopolymerisation — the molecules link together to form a solid, durable layer. This
              is fundamentally different to a wrap that simply dries or self-adheres.
            </p>
            <p className="text-ivory/70 text-sm leading-relaxed">
              The result is a finish that holds its shape, resists chipping, and stays flexible
              enough to move with your nail — for up to four weeks with correct application.
            </p>
          </div>
        </div>

        {/* UV Safety note */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#b4cbe6' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
          </div>
          <p className="text-ivory/45 text-xs leading-relaxed max-w-2xl">
            <span className="text-ivory/70 font-medium">A note on UV lamps.</span>{' '}
            Our lamps emit low-level UV light for a short, controlled curing cycle — typically
            60 seconds per coat. When used as directed, they are considered safe for regular home
            use. As with any UV exposure, we recommend keeping the lamp away from eyes during
            curing.
          </p>
        </div>

      </div>
    </section>
  )
}
