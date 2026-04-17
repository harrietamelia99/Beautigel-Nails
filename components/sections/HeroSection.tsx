import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGES = {
  left: { src: '/hero-nails.png', alt: 'Beautigel gel nail wraps on hands with gold rings' },
  right: { src: '/hero-boxes.png', alt: 'Beautigel Nails London branded packaging boxes in Paris' },
}

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal"
      style={{ height: 'clamp(420px, 70vh, 780px)' }}
    >
      {/* Mobile: single panel. Desktop: split panels */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left panel — always visible */}
        <div className="relative overflow-hidden">
          <Image
            src={HERO_IMAGES.left.src}
            alt={HERO_IMAGES.left.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>
        {/* Right panel — desktop only */}
        <div className="hidden md:block relative overflow-hidden">
          <Image
            src={HERO_IMAGES.right.src}
            alt={HERO_IMAGES.right.alt}
            fill
            sizes="50vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/80 to-transparent pointer-events-none" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center pb-10 md:pb-12 px-6">
        <p className="text-[9px] tracking-widest uppercase text-ivory/60 mb-2 font-medium">
          Premium Gel Nail Wraps
        </p>
        <h1 className="section-heading text-ivory text-xl md:text-3xl mb-5">
          Salon-effect nails,{' '}
          <span>without the salon</span>
        </h1>
        <Link href="/products" className="btn-primary text-[10px] py-2.5 px-8" style={{ backgroundColor: '#b4cbe6', color: '#111111' }}>
          Shop Now
        </Link>
      </div>
    </section>
  )
}
