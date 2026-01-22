// Dynamically load Google Analytics and GTM scripts after consent
// Using Google Consent Mode v2

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Ensure gtag function exists (should already be set in index.html)
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
  }
  
  // Initialize GA (script should already be loaded in index.html)
  // Consent defaults are already set in index.html, and consent update is called before this
  window.gtag('js', new Date());
  window.gtag('config', 'G-LTYP7Q1DVK');
};

export const loadGoogleTagManager = () => {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer if not already done
  window.dataLayer = window.dataLayer || [];
  
  // GTM script - using the standard GTM implementation
  (function(w: any, d: Document, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    if (f && f.parentNode) {
      f.parentNode.insertBefore(j, f);
    }
  })(window, document, 'script', 'dataLayer', 'GTM-PDG3G82M');
  
  // GTM noscript fallback - only add if not already present
  if (!document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]')) {
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-PDG3G82M';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    if (document.body.firstChild) {
      document.body.insertBefore(noscript, document.body.firstChild);
    } else {
      document.body.appendChild(noscript);
    }
  }
};

export const loadAllAnalytics = () => {
  loadGoogleAnalytics();
  loadGoogleTagManager();
};
