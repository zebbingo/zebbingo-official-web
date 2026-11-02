declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function validMeasurementId(value?: string): value is string {
  return !!value && /^G-[A-Z0-9]{6,20}$/.test(value);
}

export function sendPageView(id: string, location: string, referrer: string) {
  const target = window;
  if (!validMeasurementId(id) || target[`ga-disable-${id}`]) return;
  if (!target.gtag) {
    target.dataLayer = target.dataLayer || [];
    target.gtag = (...args: unknown[]) => { target.dataLayer?.push(args); };
    target.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied',
    });
    target.gtag('js', new Date());
  }
  target.gtag('consent', 'update', { analytics_storage: 'granted' });
  target.gtag('config', id, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 60 * 60 * 24 * 30,
    cookie_update: false,
    page_location: location,
    page_referrer: referrer,
  });
  target.gtag('event', 'page_view', {
    send_to: id,
    page_location: location,
    page_referrer: referrer,
    page_title: document.title,
  });
  if (!document.getElementById('zebbingo-google-analytics')) {
    const script = document.createElement('script');
    script.id = 'zebbingo-google-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  }
}

export function withdrawAnalytics(id: string) {
  window[`ga-disable-${id}`] = true;
  const names = ['_ga', `_ga_${id.slice(2)}`];
  const parts = window.location.hostname.split('.');
  const domains = ['', ...parts.slice(0, -1).map((_, index) => parts.slice(index).join('.'))];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` Domain=${domain};` : ''}`;
      if (domain) document.cookie = `${name}=; Max-Age=0; path=/; Domain=.${domain};`;
    }
  }
  // Unload Google's timers/listeners; the saved denied choice blocks loading on the next page.
  window.location.reload();
}
