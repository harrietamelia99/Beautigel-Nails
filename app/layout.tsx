import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import { CartProvider } from '@/context/CartContext'
import { TrustBar } from '@/components/layout/TrustBar'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { PromoPopup } from '@/components/ui/PromoPopup'

export const metadata: Metadata = {
  title: {
    default: 'Beautigel Nails London · Salon-Effect Gel Nail Wraps',
    template: '%s | Beautigel Nails London',
  },
  description:
    'Luxury gel nail wraps designed to give you a polished, salon-effect manicure from the comfort of home. Without the cost, time, or damage of regular salon visits.',
  keywords: ['gel nail wraps', 'nail wraps', 'salon nails at home', 'nail beauty', 'Beautigel'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Beautigel Nails London',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="bg-ivory text-charcoal antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <PromoPopup />
        </CartProvider>

        {/* Snipcart — CSS via globals.css, JS initialised after page is interactive */}
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_KEY}
          data-currency="gbp"
        />
        <Script
          src="https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
