'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return

    // Set SnipcartSettings BEFORE loading the script — this is the modern
    // recommended approach. Snipcart reads publicApiKey from here and creates
    // the #snipcart div itself, avoiding any React hydration conflicts.
    ;(window as unknown as Record<string, unknown>).SnipcartSettings = {
      publicApiKey: apiKey,
      loadStrategy: 'on-user-interaction',
      currency: 'gbp',
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

    // Inject Snipcart JS — the script handles creating #snipcart and wiring
    // up the API key from window.SnipcartSettings automatically
    if (!document.getElementById('snipcart-js')) {
      const script = document.createElement('script')
      script.id = 'snipcart-js'
      script.src = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [apiKey])

  return null
}
