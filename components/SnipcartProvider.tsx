'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return

    // Set SnipcartSettings (modern approach — read by snipcart.js on init)
    ;(window as unknown as Record<string, unknown>).SnipcartSettings = {
      publicApiKey: apiKey,
      currency: 'gbp',
    }

    // Create #snipcart div with data-api-key (classic approach — also required
    // by snipcart.js to locate the config on load)
    if (!document.getElementById('snipcart')) {
      const div = document.createElement('div')
      div.id = 'snipcart'
      div.setAttribute('data-api-key', apiKey)
      div.setAttribute('data-currency', 'gbp')
      div.setAttribute('hidden', 'true')
      document.body.appendChild(div)
    }

    // Inject Snipcart CSS
    if (!document.getElementById('snipcart-css')) {
      const link = document.createElement('link')
      link.id = 'snipcart-css'
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.css'
      document.head.prepend(link)
    }

    // Inject Snipcart JS last — it reads both window.SnipcartSettings
    // and #snipcart[data-api-key] on startup
    if (!document.getElementById('snipcart-js')) {
      const script = document.createElement('script')
      script.id = 'snipcart-js'
      script.src = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [apiKey])

  return null
}
