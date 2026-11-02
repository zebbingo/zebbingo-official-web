'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { readCampaign, analyticsLocation, analyticsReferrer } from '@/lib/traffic-attribution.mjs';
import { readAnalyticsConsent, saveAnalyticsConsent, subscribeAnalyticsConsent } from '@/lib/analytics-consent';
import { sendPageView, validMeasurementId, withdrawAnalytics } from '@/lib/google-analytics';

export default function TrafficAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeAnalyticsConsent, readAnalyticsConsent, () => 'unknown');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const entry = useRef<{ campaign: Record<string, string>; referrer: string } | null>(null);
  const lastLocation = useRef<string | null>(null);
  const configured = validMeasurementId(measurementId);

  useEffect(() => {
    if (!configured) return;
    if (!entry.current) {
      entry.current = { campaign: readCampaign(window.location.href), referrer: analyticsReferrer(document.referrer) };
    }
    if (consent !== 'granted') {
      if (lastLocation.current) withdrawAnalytics(measurementId);
      return;
    }
    const location = analyticsLocation(window.location.href, entry.current.campaign);
    if (location && location !== lastLocation.current) {
      sendPageView(measurementId, location, entry.current.referrer);
      lastLocation.current = location;
    }
  }, [pathname, consent, configured, measurementId]);

  if (!configured) return null;

  function choose(allow: boolean) {
    saveAnalyticsConsent(allow ? 'granted' : 'denied');
    setSettingsOpen(false);
    if (!allow && consent === 'granted' && measurementId) withdrawAnalytics(measurementId);
  }

  return (
    <>
      <footer className="bg-white px-6 pb-8 pr-16 text-center text-sm md:pr-28">
        <button className="underline underline-offset-4" onClick={() => setSettingsOpen(true)}>
          Analytics preferences
        </button>
        <span className="mx-3" aria-hidden="true">·</span>
        <Link href="/privacy_policy/" className="underline underline-offset-4">Privacy Policy</Link>
      </footer>
      {(consent === 'unknown' || settingsOpen) && (
        <section aria-label="Optional website analytics" className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-5 shadow-xl sm:p-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-lg font-bold">Optional website analytics</h2>
            <p className="mb-4 text-sm leading-relaxed">
              May we use Google Analytics to understand how people find and use our website?
              It runs only if you allow it. You can change your choice in Analytics preferences.{' '}
              <Link href="/privacy_policy/" className="underline underline-offset-4">Read our Privacy Policy</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border-2 border-black px-5 py-2 font-semibold" onClick={() => choose(true)}>Allow analytics</button>
              <button className="rounded-full border-2 border-black px-5 py-2 font-semibold" onClick={() => choose(false)}>Decline analytics</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
