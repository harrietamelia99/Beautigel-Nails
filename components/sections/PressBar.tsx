const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-8 h-8">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8l4-2v10l-4-2" />
        <circle cx="8.5" cy="9.5" r="2.5" />
      </svg>
    ),
    title: 'Free UK Shipping on Orders Over £35',
    desc: 'Spend over £35 and enjoy complimentary UK delivery. No code needed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 16 16.89l1.06-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Expert Support',
    desc: 'Friendly, knowledgeable help whenever you need it.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Safe & Secure Checkout',
    desc: 'All major payment methods accepted with fully encrypted checkout.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: '100% Cruelty-Free & Vegan',
    desc: 'Our products are kind to animals and kind to your nails.',
  },
]

export function PressBar() {
  return (
    <section className="bg-ivory border-t border-b border-nude/60 py-10 section-padding">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full border border-nude flex items-center justify-center text-charcoal">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase font-bold text-charcoal mb-1">{item.title}</p>
              <p className="text-xs text-mocha leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
