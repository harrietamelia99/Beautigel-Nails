const BLUE = '#b4cbe6'

const LAYERS = [
  {
    label: 'UV-Cured Top Coat.',
    desc: 'High-gloss, chip-resistant protection. Fully hardened by UV light for a mirror-like finish that lasts.',
    colour: '#c8dff0',
    shade: '#a8c8e8',
  },
  {
    label: 'Salon-Grade Colour Gel.',
    desc: '2 layers of fully cured gel colour for deep, lasting vibrancy — equivalent to a professional salon application.',
    colour: '#b4cbe6',
    shade: '#8aafd4',
  },
  {
    label: 'Flexible Base Coat.',
    desc: 'Bonds to the natural nail while staying flexible enough to move with it. Protects against brittleness and breakage.',
    colour: '#d4e8f4',
    shade: '#b4d0e8',
  },
  {
    label: 'Skin-Safe Adhesive.',
    desc: 'A gentle, peel-off adhesive formulated for clean removal. No acetone, no damage to your natural nail.',
    colour: '#e8f4fc',
    shade: '#c8dff0',
  },
]

const TECH_BADGES = ['UV-Cured', 'HEMA Free', 'Vegan', 'Cruelty-Free']

export function NailFormulaSection() {
  return (
    <section className="section-padding py-14 md:py-20 bg-ivory border-t border-nude/60">
      <div className="max-w-6xl mx-auto">

        {/* Top: tech callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">

          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {TECH_BADGES.map((b) => (
                <span
                  key={b}
                  className="text-[9px] tracking-widest uppercase font-semibold border border-nude text-charcoal px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>

            <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-5">
              Powered by UV-Cured Gel Technology.
            </h2>
            <p className="text-mocha text-sm leading-relaxed mb-6">
              Our gel wraps are semi-cured in production, then fully hardened at home using your UV
              lamp. This final cure step is what sets them apart — locking every layer into a
              solid, durable structure that non-cured alternatives simply cannot replicate.
            </p>

            <div className="border-l-2 pl-5 mb-8" style={{ borderColor: BLUE }}>
              <p className="text-[10px] tracking-widest uppercase text-mocha font-semibold mb-2">The Science</p>
              <p className="text-mocha text-sm leading-relaxed">
                When exposed to UV light, the gel undergoes photopolymerisation — molecular chains
                cross-link to form a high-density, stable network. The result is a hardened layer
                with real structural integrity, not just a surface coating.
              </p>
            </div>
          </div>

          {/* Molecule / tech visual */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-xs aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #f0f7fd 0%, #daeaf7 50%, #b4cbe6 100%)' }}
            >
              {/* Abstract molecular chain SVG */}
              <svg viewBox="0 0 220 220" width="200" height="200" aria-hidden="true">
                {/* Bonds */}
                <line x1="110" y1="20" x2="110" y2="60" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="110" y1="60" x2="75" y2="90" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="110" y1="60" x2="145" y2="90" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="75" y1="90" x2="75" y2="130" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="145" y1="90" x2="145" y2="130" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="75" y1="130" x2="110" y2="160" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="145" y1="130" x2="110" y2="160" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                <line x1="110" y1="160" x2="110" y2="200" stroke="#8aafd4" strokeWidth="2.5" opacity="0.6"/>
                {/* Cross bonds */}
                <line x1="75" y1="90" x2="145" y2="90" stroke="#c8dff0" strokeWidth="1.5" opacity="0.5"/>
                <line x1="75" y1="110" x2="145" y2="110" stroke="#c8dff0" strokeWidth="1.5" opacity="0.4"/>
                <line x1="75" y1="130" x2="145" y2="130" stroke="#c8dff0" strokeWidth="1.5" opacity="0.5"/>
                {/* Nodes — large */}
                <circle cx="110" cy="60" r="16" fill="#8aafd4" opacity="0.9"/>
                <circle cx="75" cy="90" r="13" fill="#b4cbe6" opacity="0.85"/>
                <circle cx="145" cy="90" r="11" fill="#c8dff0" opacity="0.8"/>
                <circle cx="75" cy="130" r="11" fill="#c8dff0" opacity="0.8"/>
                <circle cx="145" cy="130" r="13" fill="#b4cbe6" opacity="0.85"/>
                <circle cx="110" cy="160" r="16" fill="#8aafd4" opacity="0.9"/>
                {/* Nodes — small top/bottom */}
                <circle cx="110" cy="20" r="8" fill="#daeaf7" opacity="0.7"/>
                <circle cx="110" cy="200" r="8" fill="#daeaf7" opacity="0.7"/>
                {/* Inner highlights */}
                <circle cx="107" cy="57" r="5" fill="white" opacity="0.35"/>
                <circle cx="107" cy="157" r="5" fill="white" opacity="0.35"/>
              </svg>

              {/* Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="text-[9px] tracking-widest uppercase text-charcoal/50 bg-white/60 px-3 py-1 rounded-full whitespace-nowrap">
                  Photopolymer cross-link network
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: layers diagram */}
        <div>
          <div className="text-center mb-10">
            <p className="label-text mb-2">What Makes It Work</p>
            <h3 className="section-heading text-xl md:text-2xl text-charcoal">
              Four Layers. One Flawless Finish.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Nail illustration — stacked layers */}
            <div className="flex justify-center">
              <div className="relative w-48 md:w-56">
                {LAYERS.map((layer, i) => (
                  <div
                    key={layer.label}
                    className="relative rounded-t-[60px] rounded-b-lg w-full transition-all"
                    style={{
                      height: '52px',
                      marginTop: i === 0 ? 0 : '-2px',
                      background: `linear-gradient(160deg, ${layer.colour} 0%, ${layer.shade} 100%)`,
                      boxShadow: `0 4px 12px rgba(0,0,0,0.07)`,
                      borderRadius: i === 0 ? '60px 60px 0 0' : i === LAYERS.length - 1 ? '0 0 16px 16px' : '0',
                      zIndex: LAYERS.length - i,
                    }}
                  >
                    {/* Dot marker */}
                    <div
                      className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white"
                      style={{ backgroundColor: layer.shade }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Layer labels */}
            <div className="space-y-5">
              {LAYERS.map((layer, i) => (
                <div key={layer.label} className="flex items-start gap-4">
                  <div
                    className="w-5 h-5 rounded-full shrink-0 mt-0.5 border-2 border-white"
                    style={{
                      background: `linear-gradient(135deg, ${layer.colour}, ${layer.shade})`,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  />
                  <div>
                    <p className="section-heading text-sm text-charcoal mb-0.5">{layer.label}</p>
                    <p className="text-mocha text-xs leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
