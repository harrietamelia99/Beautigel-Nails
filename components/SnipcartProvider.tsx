'use client'

import { useEffect } from 'react'

const BRAND_CSS = `
/* ===== BEAUTIGEL BRAND — SNIPCART CHECKOUT OVERRIDES ===== */

/* Global font */
#snipcart-app {
  font-family: 'Henderson Sans Basic', ui-sans-serif, system-ui, sans-serif !important;
  color: #111111 !important;
}

/* All backgrounds → ivory */
#snipcart-app,
#snipcart-app .snipcart,
#snipcart-app .snipcart-modal__container,
#snipcart-app .snipcart-checkout,
#snipcart-app .snipcart-cart,
#snipcart-app .snipcart-cart__header,
#snipcart-app .snipcart-cart__content,
#snipcart-app .snipcart-summary-fees,
#snipcart-app .snipcart-cart__footer,
#snipcart-app .snipcart-billing,
#snipcart-app .snipcart-payment,
#snipcart-app .snipcart-order {
  background-color: #F5F0EB !important;
}

/* Headings → Playfair Display */
#snipcart-app h1,
#snipcart-app h2,
#snipcart-app h3,
#snipcart-app .snipcart-cart-header__title,
#snipcart-app .snipcart__title {
  font-family: 'Playfair Display', Georgia, serif !important;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
  color: #111111 !important;
}

/* Borders → nude */
#snipcart-app .snipcart-item-line,
#snipcart-app .snipcart-cart__footer,
#snipcart-app .snipcart-summary-fees,
#snipcart-app .snipcart-billing__footer,
#snipcart-app hr {
  border-color: #EDE6DC !important;
}

/* Item name */
#snipcart-app .snipcart-item-line__title {
  font-size: 0.65rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  font-weight: 500 !important;
  color: #111111 !important;
}

/* HIDE long description — we pass none, but belt-and-braces */
#snipcart-app .snipcart-item-line__body {
  display: none !important;
}

/* Qty stepper */
#snipcart-app .snipcart-item-quantity {
  border-color: #EDE6DC !important;
  border-radius: 9999px !important;
}

/* Primary / checkout button */
#snipcart-app .snipcart-base-button,
#snipcart-app .snipcart-button-primary {
  background-color: #b4cbe6 !important;
  color: #111111 !important;
  border-radius: 9999px !important;
  font-size: 0.65rem !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  font-weight: 500 !important;
  border: none !important;
  font-family: 'Henderson Sans Basic', sans-serif !important;
  box-shadow: none !important;
}
#snipcart-app .snipcart-base-button:hover,
#snipcart-app .snipcart-button-primary:hover {
  opacity: 0.88 !important;
  background-color: #b4cbe6 !important;
}

/* Secondary / link buttons */
#snipcart-app .snipcart-button-link,
#snipcart-app .snipcart__button--link {
  color: #111111 !important;
  text-decoration: underline !important;
  text-underline-offset: 3px !important;
}

/* All text inputs, selects */
#snipcart-app input:not([type="radio"]):not([type="checkbox"]),
#snipcart-app select,
#snipcart-app textarea {
  border-color: #EDE6DC !important;
  background-color: #ffffff !important;
  color: #111111 !important;
  font-family: 'Henderson Sans Basic', sans-serif !important;
  font-size: 0.75rem !important;
  border-radius: 4px !important;
}
#snipcart-app input:focus,
#snipcart-app select:focus,
#snipcart-app textarea:focus {
  border-color: #111111 !important;
  outline: none !important;
  box-shadow: none !important;
}

/* Form labels */
#snipcart-app label,
#snipcart-app .snipcart-form__label {
  font-size: 0.6rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: #9A8E82 !important;
}

/* Fee rows */
#snipcart-app .snipcart-summary-fees__title,
#snipcart-app .snipcart-summary-fees__item-label {
  font-size: 0.65rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: #111111 !important;
}
#snipcart-app .snipcart-summary-fees__amount,
#snipcart-app .snipcart-summary-fees__notice {
  color: #9A8E82 !important;
  font-size: 0.75rem !important;
}

/* Promo code row */
#snipcart-app .snipcart-discount-box__form input {
  border-radius: 9999px 0 0 9999px !important;
  border-right: none !important;
}
#snipcart-app .snipcart-discount-box__button {
  border-radius: 0 9999px 9999px 0 !important;
  background: #ffffff !important;
  color: #111111 !important;
  border-color: #EDE6DC !important;
  border-left: none !important;
  font-size: 0.6rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
}

/* Close / back icons */
#snipcart-app .snipcart-modal__close,
#snipcart-app .snipcart__icon--close {
  color: #9A8E82 !important;
}
#snipcart-app .snipcart-modal__close:hover {
  color: #111111 !important;
}

/* Stepper text */
#snipcart-app .snipcart-item-quantity__quantity {
  color: #111111 !important;
  background: transparent !important;
  border-color: #EDE6DC !important;
}

/* Price */
#snipcart-app .snipcart-item-line__price,
#snipcart-app .snipcart-price {
  color: #111111 !important;
  font-weight: 500 !important;
}

/* Scrollbar */
#snipcart-app ::-webkit-scrollbar { width: 4px; }
#snipcart-app ::-webkit-scrollbar-track { background: #F5F0EB; }
#snipcart-app ::-webkit-scrollbar-thumb { background: #9A8E82; border-radius: 2px; }
`

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return
    if (document.getElementById('snipcart-settings')) return

    // Snipcart init snippet
    const configScript = document.createElement('script')
    configScript.id = 'snipcart-settings'
    configScript.textContent = `
      window.SnipcartSettings = {
        publicApiKey: '${apiKey}',
        loadStrategy: 'on-user-interaction',
        currency: 'gbp',
      };
      (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector('script[src^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][src$="snipcart.js"]'),n=document.querySelector('link[href^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][href$="snipcart.css"]');e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.js",i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.css",t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){t.dataset.apiKey=window.SnipcartSettings.publicApiKey;window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency)}})();
    `
    document.head.appendChild(configScript)

    // Inject brand overrides immediately after Snipcart's CSS <link> appears.
    // By appending AFTER their link we win the cascade without needing !important.
    // We also use !important as a belt-and-braces for any high-specificity Snipcart rules.
    const injectBrandStyles = () => {
      if (document.getElementById('snipcart-brand-styles')) return
      const style = document.createElement('style')
      style.id = 'snipcart-brand-styles'
      style.textContent = BRAND_CSS
      document.head.appendChild(style)
    }

    const observer = new MutationObserver(() => {
      const snipcartCss = document.querySelector('link[href*="snipcart.css"]')
      if (snipcartCss) {
        injectBrandStyles()
        observer.disconnect()
      }
    })
    observer.observe(document.head, { childList: true, subtree: true })

    // Fallback: also try on snipcart.ready in case the link was already inserted
    document.addEventListener('snipcart.ready', injectBrandStyles, { once: true })

    return () => {
      observer.disconnect()
    }
  }, [apiKey])

  return null
}
