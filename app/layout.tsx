import type { Metadata } from 'next'
import '@/styles/globals.css'
import { CartProvider } from '@/context/CartContext'
import { TrustBar } from '@/components/layout/TrustBar'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PromoPopup } from '@/components/ui/PromoPopup'
import { SnipcartProvider } from '@/components/SnipcartProvider'
import { SnipcartCart } from '@/components/cart/SnipcartCart'

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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
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
          <PromoPopup />
          <SnipcartCart />
        </CartProvider>

        <SnipcartProvider apiKey={process.env.NEXT_PUBLIC_SNIPCART_KEY ?? ''} />
      </body>
    </html>
  )
}
