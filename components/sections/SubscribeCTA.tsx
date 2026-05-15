import Link from 'next/link'
import Image from 'next/image'

const BLUE = '#b4cbe6'

const PERKS = [
  { label: 'Save up to 25%', sub: 'Subscriber pricing on every order' },
  { label: 'Free UK Shipping', sub: 'Included with every delivery' },
  { label: 'Flexible Schedule', sub: 'Every 3, 4, 6 or 8 weeks' },
  { label: 'Cancel Anytime', sub: 'No fees, no questions' },
]

export function SubscribeCTA() {
  return (
    <section className="section-padding py-14 md:py-20 border-t border-nude/60 bg-nude/30">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-stretch">

          {/* Left: image */}
          <div className="hidden lg:block">
            <Image
              src="/lifestyle/subscribe-calendar.png"
              alt="BeautiGel subscription — new nail set delivered every month"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Middle: copy */}
          <div>
            <p className="label-text mb-3" style={{ color: BLUE }}>Member Savings</p>
            <h2 className="section-heading text-2xl md:text-3xl text-charcoal mb-5">
              Never Run Out of Your Favourite Sets.
            </h2>
            <p className="text-mocha text-sm leading-relaxed mb-6 max-w-md">
              Join the BeautiGel membership and have your gel wraps delivered on your schedule,
              with exclusive subscriber pricing, free UK shipping and complete flexibility to
              pause, skip or cancel at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/subscribe" className="btn-primary whitespace-nowrap">
                Explore Membership
              </Link>
              <Link href="/products/starter-kit" className="btn-secondary whitespace-nowrap">
                Start with a Bundle
              </Link>
            </div>
          </div>

          {/* Right: perk tiles */}
          <div className="grid grid-cols-2 gap-3 content-stretch">
            {PERKS.map((perk) => (
              <div
                key={perk.label}
                className="bg-white border border-nude rounded-2xl p-5 flex flex-col gap-2 h-full"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: BLUE }}
                />
                <p className="section-heading text-sm text-charcoal">{perk.label}</p>
                <p className="text-mocha text-xs leading-snug">{perk.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
