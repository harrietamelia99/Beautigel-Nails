import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Beautigel Nails London. A mother and daughter brand built on the belief that salon-quality nails should be accessible, affordable, and kind to your natural nails.',
}

const BLUE = '#b4cbe6'

const IconConfidence = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={BLUE}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const IconAccessibility = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={BLUE}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

const IconElegance = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={BLUE}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const IconConvenience = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={BLUE}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
)

const VALUES = [
  {
    title: 'Confidence',
    description:
      'We believe beautiful nails are more than aesthetic. They\'re a source of confidence. We design every wrap to make you feel polished, put-together, and proud.',
    Icon: IconConfidence,
  },
  {
    title: 'Accessibility',
    description:
      'Salon-quality shouldn\'t mean salon prices. We\'re committed to making premium gel nail products genuinely affordable for every woman.',
    Icon: IconAccessibility,
  },
  {
    title: 'Elegance',
    description:
      'Every design, every detail, every finish is considered. We don\'t do ordinary. We do refined, considered, quietly luxurious.',
    Icon: IconElegance,
  },
  {
    title: 'Convenience',
    description:
      'Life is busy. Your nails shouldn\'t need to take hours. With Beautigel, a flawless manicure is minutes away. Not a full afternoon.',
    Icon: IconConvenience,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-28 bg-ivory">
      {/* Hero */}
      <section className="section-padding pt-16 pb-20 bg-nude border-b border-nude/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-text mb-4" style={{ color: '#b4cbe6' }}>Our Story</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
            <h1 className="section-heading text-3xl md:text-4xl text-charcoal">
              About Us
            </h1>
            <span className="h-px w-12" style={{ backgroundColor: '#b4cbe6', opacity: 0.5 }} />
          </div>
          <p className="text-mocha text-sm leading-relaxed max-w-md mx-auto">
            Beautigel Nails London is a mother and daughter brand, founded on the idea of making
            beautiful, salon-inspired nails more accessible, affordable, and convenient for
            everyday women.
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="section-padding section-py bg-ivory">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Founding image — arch frame */}
          <div className="flex justify-center">
            <div
              className="relative overflow-hidden w-full"
              style={{ maxWidth: '360px', aspectRatio: '3/4', borderRadius: '200px 200px 0 0' }}
            >
              <Image
                src="/mother-daughter.png"
                alt="Beautigel Nails London founders — mother and daughter"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Story text */}
          <div>
            <p className="label-text mb-6">How We Started</p>
            <h2 className="section-heading text-3xl text-charcoal mb-8">
              A mother &amp; daughter idea
            </h2>
            <div className="space-y-5 text-mocha text-sm leading-relaxed">
              <p>
                It started, as the best ideas do, with a simple frustration. Salon visits were
                expensive, time-consuming, and the results never lasted as long as they should. We
                knew there had to be a better way.
              </p>
              <p>
                We spent months researching, testing, and refining until we found it: premium gel
                nail wraps that genuinely deliver salon-quality results, at a fraction of the cost
                and in a fraction of the time.
              </p>
              <p>
                Beautigel Nails was born from our shared belief that every woman deserves beautiful
                nails, without compromise. The brand is built on quality, care, and a deep
                understanding of what our customers actually need.
              </p>
              <p>
                We&apos;re not a big corporation. We&apos;re two women who love beautiful nails and
                wanted to share something genuinely special with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="section-padding pt-12 pb-16 bg-nude border-t border-nude/60">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="label-text mb-5">Our Mission</p>
          <blockquote className="section-heading text-2xl md:text-3xl text-charcoal italic normal-case tracking-normal font-medium">
            &ldquo;To make beautiful, salon-inspired nails more accessible, affordable, and
            convenient for everyday women.&rdquo;
          </blockquote>
        </div>

      {/* Values */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="label-text text-mocha mb-4">What we stand for</p>
            <h2 className="section-heading text-3xl text-charcoal">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-ivory rounded-2xl p-8 shadow-sm">
                <div className="mb-5"><value.Icon /></div>
                <h3 className="section-heading text-base text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-mocha text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding py-14 bg-ivory border-t border-nude/60">
        <div className="max-w-2xl mx-auto bg-nude rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center">
          <p className="label-text mb-4">Ready to discover Beautigel?</p>
          <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-4">
            Shop the Collection
          </h2>
          <p className="text-sm text-mocha leading-relaxed mb-8 max-w-sm mx-auto">
            Browse our full range of gel nail wraps, UV lamps, and cuticle oils.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/products/starter-kit" className="btn-secondary">
              Build Your Starter Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
