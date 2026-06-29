'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    // Inject Snipcart CSS
    if (!document.getElementById('snipcart-css')) {
      const link = document.createElement('link')
      link.id = 'snipcart-css'
      link.rel = 'stylesheet'
      link.href = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.css'
      document.head.appendChild(link)
    }

    // Inject Snipcart JS
    if (!document.getElementById('snipcart-js')) {
      const script = document.createElement('script')
      script.id = 'snipcart-js'
      script.src = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      hidden
      id="snipcart"
      data-api-key={apiKey}
      data-currency="gbp"
    />
  )
}
