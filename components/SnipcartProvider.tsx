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
      };
      (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector('script[src^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][src$="snipcart.js"]'),n=document.querySelector('link[href^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][href$="snipcart.css"]');e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.js",i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.css",t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){t.dataset.apiKey=window.SnipcartSettings.publicApiKey;window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency)}})();
    `
    document.head.appendChild(configScript)

    // Beautigel brand overrides for the Snipcart cart UI
    const style = document.createElement('style')
    style.id = 'snipcart-brand-overrides'
    style.textContent = `
      /* Cart panel background & typography */
      #snipcart .snipcart-modal__container {
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
        background: #F5F0EB !important;
      }
      #snipcart .snipcart-cart__content {
        background: #F5F0EB !important;
      }
      #snipcart .snipcart-modal__close-icon {
        color: #161616 !important;
      }

      /* Header */
      #snipcart .snipcart-cart__header {
        background: #F5F0EB !important;
        border-bottom: 1px solid #e0d9d0 !important;
      }
      #snipcart .snipcart-cart__header-title {
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
        font-size: 1.25rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.05em !important;
        text-transform: uppercase !important;
        color: #161616 !important;
      }

      /* Item list */
      #snipcart .snipcart-item-list {
        background: #F5F0EB !important;
      }
      #snipcart .snipcart-item-line {
        background: #FDFAF7 !important;
        border: 1px solid #e0d9d0 !important;
        border-radius: 4px !important;
        margin-bottom: 0.75rem !important;
      }
      #snipcart .snipcart-item-line__header-title {
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
        font-weight: 600 !important;
        color: #161616 !important;
        font-size: 1rem !important;
      }
      #snipcart .snipcart-item-line__body,
      #snipcart .snipcart-item-line__actions {
        color: #5a5a5a !important;
        font-size: 0.875rem !important;
      }

      /* Quantity controls */
      #snipcart .snipcart-item-quantity__quantity {
        border-color: #c8bfb4 !important;
        background: #F5F0EB !important;
        color: #161616 !important;
      }
      #snipcart .snipcart__button--icon {
        color: #161616 !important;
      }

      /* Footer / totals */
      #snipcart .snipcart-cart__footer {
        background: #F5F0EB !important;
        border-top: 1px solid #e0d9d0 !important;
      }
      #snipcart .snipcart-cart__footer-col,
      #snipcart .snipcart-summary-fees__label,
      #snipcart .snipcart-summary-fees__amount {
        color: #161616 !important;
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
      }
      #snipcart .snipcart-summary-fees__total-label,
      #snipcart .snipcart-summary-fees__total-amount {
        font-weight: 700 !important;
        font-size: 1.1rem !important;
      }

      /* Checkout button */
      #snipcart .snipcart-cart__footer-buttons .snipcart__button--cta,
      #snipcart .snipcart-base-button.snipcart__button--cta {
        background: #161616 !important;
        color: #F5F0EB !important;
        font-family: 'Cormorant Garamond', 'Georgia', serif !important;
        font-size: 0.8rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.12em !important;
        text-transform: uppercase !important;
        border-radius: 0 !important;
        border: none !important;
        padding: 1rem 2rem !important;
      }
      #snipcart .snipcart__button--cta:hover {
        background: #333 !important;
      }

      /* Remove (trash) button */
      #snipcart .snipcart__button--danger {
        color: #9b8b7a !important;
      }
      #snipcart .snipcart__button--danger:hover {
        color: #161616 !important;
      }

      /* Overlay */
      #snipcart .snipcart-modal__overlay {
        background: rgba(22, 22, 22, 0.55) !important;
      }

      /* "Secured by Snipcart" badge */
      #snipcart .snipcart-cart__secondary-header,
      #snipcart .snipcart-cart__content--empty {
        background: #F5F0EB !important;
        color: #5a5a5a !important;
      }
    `
    document.head.appendChild(style)
  }, [apiKey])

  return null
}
