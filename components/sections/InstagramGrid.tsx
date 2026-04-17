'use client'

import Image from 'next/image'

const POSTS = [
  { src: '/products/coffee-and-cream.png', alt: 'Coffee and Cream Ombré gel nail wraps' },
  { src: '/products/candy-apple-red.png', alt: 'Candy Apple Red Glitter gel nail wraps' },
  { src: '/products/cherry-blossom.png', alt: 'Cherry Blossom gel nail wraps' },
]

export function InstagramGrid() {
  return (
    <section className="py-10 md:py-14 section-padding bg-ivory border-t border-nude/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="label-text mb-2">Find us on Instagram</p>
          <h2 className="section-heading text-xl text-charcoal">
            @beautigelnails
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {POSTS.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/beautigelnails"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-2xl group block"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/beautigelnails"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow @beautigelnails
          </a>
        </div>
      </div>
    </section>
  )
}
