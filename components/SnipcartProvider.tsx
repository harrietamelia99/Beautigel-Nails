'use client'

import { useEffect } from 'react'

export function SnipcartProvider({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    if (!apiKey) return
    if (document.getElementById('snipcart-settings')) return

    // Snipcart uses publicApiKey (no ST_ prefix) in window.SnipcartSettings
    // but data-api-key on the div uses the full key (with ST_ prefix).
    // If the key already has ST_ we use it as-is; otherwise we add it.
    const fullKey = apiKey.startsWith('ST_') ? apiKey : `ST_${apiKey}`
    const publicKey = apiKey.startsWith('ST_') ? apiKey.slice(3) : apiKey

    const configScript = document.createElement('script')
    configScript.id = 'snipcart-settings'
    configScript.textContent = `
      window.SnipcartSettings = {
        publicApiKey: '${publicKey}',
        currency: 'gbp',
      };
      (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector('script[src^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][src$="snipcart.js"]'),n=document.querySelector('link[href^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][href$="snipcart.css"]');e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.js",i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=window.SnipcartSettings.protocol+"://"+window.SnipcartSettings.domain+"/themes/v"+window.SnipcartSettings.version+"/default/snipcart.css",t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){t.dataset.apiKey='${fullKey}';window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency)}})();
    `
    document.head.appendChild(configScript)
  }, [apiKey])

  return null
}
