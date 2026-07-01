'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return
    if (document.getElementById('snipcart-settings')) return

    // Snipcart init — exact recommended snippet from dashboard
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

    // Inject brand overrides after Snipcart is ready so our styles
    // always load after Snipcart's own CSS and win the cascade.
    const applyBrandStyles = () => {
      if (document.getElementById('snipcart-brand-overrides')) return
      const style = document.createElement('style')
      style.id = 'snipcart-brand-overrides'
      style.textContent = `
      /* ── Global font & base ── */
      .snipcart-checkout,
      .snipcart-checkout * {
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
        box-sizing: border-box;
      }

      /* ── Backgrounds ── */
      .snipcart-checkout .snipcart-modal__container,
      .snipcart-checkout .snipcart-cart__content,
      .snipcart-checkout .snipcart-cart__header,
      .snipcart-checkout .snipcart-cart__footer,
      .snipcart-checkout .snipcart-item-list,
      .snipcart-checkout .snipcart-layout__col--left,
      .snipcart-checkout .snipcart-layout__col--right,
      .snipcart-checkout .snipcart-form__field,
      .snipcart-checkout .snipcart-base-button {
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
        background: rgba(22, 22, 22, 0.6) !important;
      }

      /* ── Text colours ── */
      .snipcart-checkout .snipcart-item-line__header-title,
      .snipcart-checkout .snipcart-summary-fees__label,
      .snipcart-checkout .snipcart-summary-fees__amount,
      .snipcart-checkout .snipcart-summary-fees__total-label,
      .snipcart-checkout .snipcart-summary-fees__total-amount,
      .snipcart-checkout .snipcart-cart__header-title,
      .snipcart-checkout .snipcart__font--std,
      .snipcart-checkout .snipcart__font--secondary {
        color: #161616 !important;
      }

      /* ── Header ── */
      .snipcart-checkout .snipcart-cart__header {
        border-bottom: 1px solid #e0d9d0 !important;
      }
      .snipcart-checkout .snipcart-cart__header-title {
        font-size: 0.75rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.15em !important;
        text-transform: uppercase !important;
      }

      /* ── Totals ── */
      .snipcart-checkout .snipcart-summary-fees__total-label,
      .snipcart-checkout .snipcart-summary-fees__total-amount {
        font-weight: 700 !important;
        font-size: 1rem !important;
      }
      .snipcart-checkout .snipcart-cart__footer {
        border-top: 1px solid #e0d9d0 !important;
      }

      /* ── Checkout / CTA button ── */
      .snipcart-checkout .snipcart__button--cta,
      .snipcart-checkout .snipcart-base-button--link.snipcart__button--cta {
        background: #161616 !important;
        color: #F5F0EB !important;
        font-size: 0.7rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.15em !important;
        text-transform: uppercase !important;
        border-radius: 0 !important;
        border: none !important;
        padding: 1rem 2rem !important;
        box-shadow: none !important;
      }
      .snipcart-checkout .snipcart__button--cta:hover {
        background: #333 !important;
        opacity: 1 !important;
      }

      /* ── Secondary / ghost buttons ── */
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
        border-radius: 0 !important;
      }
      .snipcart-checkout input:focus,
      .snipcart-checkout select:focus {
        border-color: #161616 !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* ── Quantity stepper ── */
      .snipcart-checkout .snipcart-item-quantity__quantity {
        background: #F5F0EB !important;
        border-color: #c8bfb4 !important;
        color: #161616 !important;
      }

      /* ── Remove button ── */
      .snipcart-checkout .snipcart__button--danger,
      .snipcart-checkout .snipcart__button--icon {
        color: #9b8b7a !important;
      }
      .snipcart-checkout .snipcart__button--danger:hover,
      .snipcart-checkout .snipcart__button--icon:hover {
        color: #161616 !important;
      }

      /* ── Links ── */
      .snipcart-checkout a,
      .snipcart-checkout .snipcart__anchor {
        color: #161616 !important;
      }

      /* ── Step indicator (breadcrumb) ── */
      .snipcart-checkout .snipcart-form-step__status--completed,
      .snipcart-checkout .snipcart-form-step__status--current {
        background: #161616 !important;
        color: #F5F0EB !important;
        border-color: #161616 !important;
      }

      /* ── Hide description to clean up item lines ── */
      .snipcart-checkout .snipcart-item-line__body {
        display: none !important;
      }
      `
      document.head.appendChild(style)
    }

    // Apply immediately in case Snipcart already loaded, and also on ready
    document.addEventListener('snipcart.ready', applyBrandStyles)
    // Fallback: apply after a short delay to catch cases where event already fired
    setTimeout(applyBrandStyles, 3000)
  }, [apiKey])

  return null
}
