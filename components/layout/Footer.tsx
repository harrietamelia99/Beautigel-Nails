import Link from 'next/link'
import { Logo } from '@/components/layout/Logo'

const SHOP_LINKS = [
  { label: 'All Products', href: '/products' },
  { label: 'The Starter Kit', href: '/products/starter-kit' },
  { label: 'Gel Nail Wraps', href: '/products?category=gel-wraps' },
  { label: 'UV Lamp', href: '/products?category=uv-lamp' },
  { label: 'Cuticle Oil', href: '/products?category=cuticle-oil' },
]

const INFO_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-to' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
]

const POLICY_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Returns & Refunds', href: '/returns' },
  { label: 'Shipping Info', href: '/shipping' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="bg-ivory border-t border-nude/60 text-charcoal">
      {/* Main Footer */}
      <div className="section-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-5">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-mocha text-sm leading-relaxed mb-5 max-w-xs">
              Gel nail wraps designed for real women. Salon-quality nails, on your schedule.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/beautigelnails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-mocha hover:text-blue-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@beautigelnails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-mocha hover:text-blue-accent transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-[10px] tracking-widest uppercase text-charcoal mb-5 font-bold">Shop</h3>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mocha text-sm hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-[10px] tracking-widest uppercase text-charcoal mb-5 font-bold">Info</h3>
            <ul className="space-y-3">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mocha text-sm hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies + Contact */}
          <div>
            <h3 className="text-[10px] tracking-widest uppercase text-charcoal mb-5 font-bold">Policies</h3>
            <ul className="space-y-3 mb-7">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mocha text-sm hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[10px] tracking-widest uppercase text-charcoal mb-2 font-bold">Contact</h3>
            <a href="mailto:hello@beautigelnails.co.uk" className="text-mocha text-sm hover:text-charcoal transition-colors">
              hello@beautigelnails.co.uk
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nude/60 section-padding py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-mocha text-xs tracking-wide">
            © {new Date().getFullYear()} Beautigel Nails London. All rights reserved.
          </p>
          <a
            href="https://www.collectivstudio.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase text-mocha hover:text-charcoal transition-colors border border-nude/80 hover:border-charcoal/30 px-3 py-1 rounded-full"
          >
            Site by Collectiv. Studio
          </a>
          <div className="flex items-center gap-2">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span key={method} className="border border-nude text-mocha text-[9px] px-2 py-0.5 rounded-full tracking-wide">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}
