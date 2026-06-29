'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    // Inject #snipcart div directly into <body> — outside React's control
    if (!document.getElementById('snipcart')) {
      const div = document.createElement('div')
      div.id = 'snipcart'
      div.setAttribute('data-api-key', apiKey)
      div.setAttribute('data-currency', 'gbp')
      div.hidden = true
      document.body.appendChild(div)
    }

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
  }, [apiKey])

  // Render nothing — everything is injected directly into the DOM
  return null
}
