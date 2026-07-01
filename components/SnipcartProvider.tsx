'use client'

import { useEffect } from 'react'

const BRAND_CSS = `
  /* ── Font ── */
  .snipcart-checkout, .snipcart-checkout * {
    font-family: 'Cormorant Garamond', 'Georgia', serif !important;
  }

  /* ── Backgrounds ── */
  .snipcart-checkout .snipcart-modal__container,
  .snipcart-checkout .snipcart-cart__content,
  .snipcart-checkout .snipcart-cart__header,
  .snipcart-checkout .snipcart-cart__footer,
  .snipcart-checkout .snipcart-item-list,
  .snipcart-checkout .snipcart-layout__col--left,
  .snipcart-checkout .snipcart-layout__col--right {
    background: #F5F0EB !important;
  }
  .snipcart-checkout .snipcart-item-line {
    background: #FDFAF7 !important;
    border: 1px solid #e0d9d0 !important;
    border-radius: 4px !important;
    margin-bottom: 0.5rem !important;
  }

  /* ── Overlay ── */
  .snipcart-checkout .snipcart-modal__overlay {
    background: rgba(22,22,22,0.55) !important;
  }

  /* ── Header ── */
  .snipcart-checkout .snipcart-cart__header {
    border-bottom: 1px solid #e0d9d0 !important;
    background: #F5F0EB !important;
  }
  .snipcart-checkout .snipcart-cart__header-title {
    font-size: 0.7rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    color: #161616 !important;
  }

  /* ── Text ── */
  .snipcart-checkout .snipcart-item-line__header-title { color: #161616 !important; font-weight: 600 !important; }
  .snipcart-checkout .snipcart-summary-fees__label,
  .snipcart-checkout .snipcart-summary-fees__amount { color: #161616 !important; }
  .snipcart-checkout .snipcart-summary-fees__total-label,
  .snipcart-checkout .snipcart-summary-fees__total-amount { color: #161616 !important; font-weight: 700 !important; font-size: 1rem !important; }
  .snipcart-checkout .snipcart-cart__footer { border-top: 1px solid #e0d9d0 !important; }

  /* ── CTA / Checkout button — black ── */
  .snipcart-checkout .snipcart__button--cta {
    background: #161616 !important;
    background-color: #161616 !important;
    color: #F5F0EB !important;
    font-family: 'Cormorant Garamond','Georgia',serif !important;
    font-size: 0.7rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }
  .snipcart-checkout .snipcart__button--cta:hover {
    background: #333 !important;
    background-color: #333 !important;
    opacity: 1 !important;
  }

  /* ── Secondary button ── */
  .snipcart-checkout .snipcart__button--secondary {
    border-color: #161616 !important;
    color: #161616 !important;
    background: transparent !important;
    border-radius: 0 !important;
  }

  /* ── Inputs ── */
  .snipcart-checkout input,
  .snipcart-checkout select,
  .snipcart-checkout textarea {
    background: #FDFAF7 !important;
    border-color: #c8bfb4 !important;
    color: #161616 !important;
    border-radius: 2px !important;
  }

  /* ── Quantity ── */
  .snipcart-checkout .snipcart-item-quantity__quantity {
    background: #F5F0EB !important;
    border-color: #c8bfb4 !important;
    color: #161616 !important;
  }

  /* ── Delete / icon buttons ── */
  .snipcart-checkout .snipcart__button--danger,
  .snipcart-checkout .snipcart__button--icon { color: #9b8b7a !important; }
  .snipcart-checkout .snipcart__button--danger:hover { color: #161616 !important; }

  /* ── Links ── */
  .snipcart-checkout a, .snipcart-checkout .snipcart__anchor { color: #161616 !important; }

  /* ── Step indicator ── */
  .snipcart-checkout .snipcart-form-step__status--completed,
  .snipcart-checkout .snipcart-form-step__status--current {
    background: #161616 !important;
    color: #F5F0EB !important;
    border-color: #161616 !important;
  }

  /* ── Hide messy product description ── */
  .snipcart-checkout .snipcart-item-line__body { display: none !important; }
`

function injectBrandStyles() {
  if (document.getElementById('snipcart-brand-overrides')) return
  const style = document.createElement('style')
  style.id = 'snipcart-brand-overrides'
  style.textContent = BRAND_CSS
  document.head.appendChild(style)
}

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return
    if (document.getElementById('snipcart-settings')) return

    // Watch for Snipcart's CSS <link> to be prepended to <head>,
    // then immediately append our override <style> right after it.
    // This guarantees our rules always come later in the cascade.
    const headObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node instanceof HTMLLinkElement &&
            node.href.includes('snipcart')
          ) {
            injectBrandStyles()
            headObserver.disconnect()
            return
          }
        }
      }
    })
    headObserver.observe(document.head, { childList: true })

    // Fallback: also listen for snipcart.ready event
    document.addEventListener('snipcart.ready', injectBrandStyles)

    // Snipcart init script — exact recommended snippet from dashboard
    const configScript = document.createElement('script')
    configScript.id = 'snipcart-settings'
    configScript.textContent = `
      window.SnipcartSettings = {
        publicApiKey: '${apiKey}',
        loadStrategy: 'on-user-interaction',
        currency: 'gbp',
        modalStyle: 'side',
      };
      (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector('script[src^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][src$="snipcart.js"]'),n=document.querySelector('link[href^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][href$="snipcart.css"]');e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.js",i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.css",t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){t.dataset.apiKey=window.SnipcartSettings.publicApiKey;window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency)}})();
    `
    document.head.appendChild(configScript)

    return () => {
      headObserver.disconnect()
      document.removeEventListener('snipcart.ready', injectBrandStyles)
    }
  }, [apiKey])

  return null
}
