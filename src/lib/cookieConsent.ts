// Cookie consent management utility

const CONSENT_KEY = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

export type ConsentStatus = 'accepted' | 'rejected' | null;

export const getConsent = (): ConsentStatus => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;
  
  try {
    const consent = JSON.parse(stored);
    // Check if consent has expired (optional - you can remove this if you want consent to persist)
    if (consent.expiry && new Date(consent.expiry) < new Date()) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return consent.status;
  } catch {
    return null;
  }
};

export const setConsent = (status: 'accepted' | 'rejected'): void => {
  if (typeof window === 'undefined') return;
  
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + CONSENT_EXPIRY_DAYS);
  
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    status,
    expiry: expiry.toISOString(),
    timestamp: new Date().toISOString(),
  }));
};

export const hasConsent = (): boolean => {
  return getConsent() === 'accepted';
};
