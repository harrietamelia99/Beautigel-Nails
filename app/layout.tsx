import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import { CartProvider } from '@/context/CartContext'
import { TrustBar } from '@/components/layout/TrustBar'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PromoPopup } from '@/components/ui/PromoPopup'
import { SnipcartProvider } from '@/components/SnipcartProvider'
import { SnipcartCart } from '@/components/cart/SnipcartCart'
import { PIXEL_ID } from '@/lib/pixel'

export const metadata: Metadata = {
  title: {
    default: 'Beautigel Nails London · Salon-Effect Gel Nail Wraps',
    template: '%s | Beautigel Nails London',
  },
  description:
    'Luxury gel nail wraps designed to give you a polished, salon-effect manicure from the comfort of home. Without the cost, time, or damage of regular salon visits.',
  keywords: ['gel nail wraps', 'nail wraps', 'salon nails at home', 'nail beauty', 'Beautigel'],
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

        {/* Meta Pixel — fires PageView on every route */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
