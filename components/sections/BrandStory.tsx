'use client'

import Image from 'next/image'
import Link from 'next/link'

export function BrandStory() {
  return (
    <section className="section-py section-padding bg-ivory border-t border-nude/60">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — text */}
        <div>
          <h2 className="section-heading text-3xl md:text-4xl text-charcoal mb-6">
            A Mother &amp; Daughter Brand.
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-3">
            A mother and daughter idea, built from a shared desire to create something beautiful.
            Beautigel Nails was born from a belief that salon-quality nails should be accessible,
            affordable, and kind to your natural nails.
          </p>
          <Link href="/about" className="btn-primary inline-flex">
            Our Story
          </Link>
        </div>

        {/* Right — image */}
        <div className="flex justify-center md:justify-end">
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
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
