// Google Consent Mode v2 management
// Updates consent state when user accepts or rejects cookies

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Update consent state to granted for all parameters
 * This should be called when user accepts cookies
 */
export const grantConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('consent', 'update', {
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
  });
};

/**
 * Update consent state to denied for all parameters
 * This should be called when user rejects cookies
 */
export const denyConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('consent', 'update', {
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
  });
};
