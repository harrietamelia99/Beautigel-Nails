'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return
    if (document.getElementById('snipcart')) return // already injected

    // 1. Create the #snipcart div — Snipcart reads the key from data-api-key
    const div = document.createElement('div')
    div.id = 'snipcart'
    div.setAttribute('data-api-key', apiKey)
    div.setAttribute('data-currency', 'gbp')
    div.setAttribute('hidden', 'true')
    document.body.appendChild(div)

    // 2. Load Snipcart CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.css'
    document.head.appendChild(link)

    // 3. Load Snipcart JS
    const script = document.createElement('script')
    script.src = 'https://cdn.snipcart.com/themes/v3.7.3/default/snipcart.js'
    script.async = true
    document.head.appendChild(script)
  }, [apiKey])

  return null
}
