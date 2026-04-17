'use client'

import Image from 'next/image'

const STEPS = [
  {
    src: '/products/cappuccino.png',
    alt: 'Choose your gel nail wrap style',
    label: 'Choose Your Style',
  },
  {
    src: '/products/black-french-tip.png',
    alt: 'Apply and cure your gel nail wrap',
    label: 'Apply & Cure',
  },
  {
    src: '/products/candy-apple-red.png',
    alt: 'Gel nail wraps lasting up to 4 weeks',
    label: 'Lasts Up To 4 Weeks',
  },
  {
    src: '/products/cherry-blossom.png',
    alt: 'Gentle removal without nail damage',
    label: 'Remove Without Damage',
  },
]

export function HowItWorks() {
  return (
    <section className="section-py section-padding bg-ivory border-t border-nude/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="label-text mb-3" style={{ color: '#b4cbe6' }}>Your Beautigel Routine</p>
          <h2 className="section-heading text-2xl md:text-3xl text-charcoal">
            Salon Nails. No Appointment Needed.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
          {STEPS.map((step) => (
            <div key={step.label} className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-cover object-top"
                />
              </div>
              <p className="text-xs md:text-sm text-charcoal font-medium tracking-wide">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
