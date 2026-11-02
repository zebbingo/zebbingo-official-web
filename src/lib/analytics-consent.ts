export type AnalyticsConsent = 'unknown' | 'granted' | 'denied';
const key = 'zebbingo.analytics-consent.v1';
const changeEvent = 'zebbingo-analytics-consent';
let memoryChoice: AnalyticsConsent | undefined;

export function readAnalyticsConsent(): AnalyticsConsent {
  if (memoryChoice) return memoryChoice;
  try {
    const value = window.localStorage.getItem(key);
    return value === 'granted' || value === 'denied' ? value : 'unknown';
  } catch {
    return 'unknown';
  }
}

export function saveAnalyticsConsent(value: AnalyticsConsent) {
  memoryChoice = value;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Consent still works for this page if browser storage is unavailable.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeAnalyticsConsent(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === key || event.key === null) {
      memoryChoice = undefined;
      callback();
    }
  }
  window.addEventListener(changeEvent, callback);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener('storage', onStorage);
  };
}
