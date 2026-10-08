// Meta Pixel helper — typed wrappers around fbq()
// Pixel ID: 1750688182902583

export const PIXEL_ID = '1750688182902583'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: any
  }
}

export function pixelTrack(event: string, params?: Record<string, any>) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq('track', event, params)
}

export function trackAddToCart(params: {
  content_name: string
  content_ids: string[]
  value: number
  currency?: string
}) {
  pixelTrack('AddToCart', { currency: 'GBP', ...params })
}

export function trackInitiateCheckout(params: {
  num_items: number
  value: number
  currency?: string
}) {
  pixelTrack('InitiateCheckout', { currency: 'GBP', ...params })
}

export function trackPurchase(params: {
  value: number
  currency?: string
}) {
  pixelTrack('Purchase', { currency: 'GBP', ...params })
}
