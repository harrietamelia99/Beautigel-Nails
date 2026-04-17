'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { Logo } from './Logo'

const NAV_LINKS = [
  { label: 'Shop', href: '/products' },
  { label: 'How To Apply', href: '/how-to' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, totalQuantity } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        } bg-ivory border-b border-nude/60`}
      >
          <nav className="section-padding flex items-center justify-between h-20 md:h-24 max-w-7xl mx-auto">
          {/* Left — Nav links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-widest uppercase text-charcoal hover:text-blue-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile — hamburger */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Centre — Logo */}
          <Link href="/" className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Right — icons */}
          <div className="flex items-center gap-5">
            {/* Social links — desktop only */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://instagram.com/beautigelnails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-75 transition-opacity"
                style={{ color: '#b4cbe6' }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@beautigelnails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:opacity-75 transition-opacity"
                style={{ color: '#b4cbe6' }}
              >
                <TikTokIcon />
              </a>
            </div>
            <button
              aria-label="Search"
              className="hidden md:block text-charcoal hover:text-blue-accent transition-colors"
            >
              <SearchIcon />
            </button>
            <button
              onClick={openCart}
              aria-label={`Cart (${totalQuantity})`}
              className="relative text-charcoal hover:text-blue-accent transition-colors"
            >
              <BagIcon />
              {totalQuantity > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-accent text-charcoal text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-ivory flex flex-col md:hidden" style={{ animation: 'slideInRight 0.2s ease-out' }}>
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-nude">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Logo className="h-8 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-charcoal" aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 px-6 py-8 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg tracking-widest uppercase text-charcoal hover:text-blue-accent transition-colors border-b border-nude py-5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="block text-lg tracking-widest uppercase text-charcoal hover:text-blue-accent transition-colors border-b border-nude py-5"
            >
              Your Bag
            </Link>
          </div>

          {/* Social + footer */}
          <div className="px-6 py-8 border-t border-nude">
            <div className="flex items-center gap-5 mb-6">
              <a href="https://instagram.com/beautigelnails" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#b4cbe6' }}>
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com/@beautigelnails" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: '#b4cbe6' }}>
                <TikTokIcon />
              </a>
            </div>
            <p className="text-mocha text-xs tracking-wide">© {new Date().getFullYear()} Beautigel Nails London</p>
          </div>
        </div>
      )}
    </>
  )
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}
