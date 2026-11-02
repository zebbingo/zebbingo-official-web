const publicPaths = new Set(['/', '/safety/', '/about/', '/privacy_policy/']);
const publisherHosts = new Set(['linkedin.com', 'www.linkedin.com', 'lnkd.in', 'ico.org.uk', 'www.ico.org.uk']);
const placements = new Set(['ico_linkedin_post', 'zebbingo_linkedin_post', 'ico_report']);

/** Only approved campaign labels enter analytics; arbitrary inbound values are not trusted.
 * @param {string} href @returns {Record<string, string>}
 */
export function readCampaign(href) {
  try {
    const params = new URL(href).searchParams;
    const source = params.get('utm_source')?.toLowerCase();
    const medium = params.get('utm_medium')?.toLowerCase();
    const campaign = params.get('utm_campaign')?.toLowerCase();
    if (campaign !== 'ico_report' || !((source === 'linkedin' && medium === 'social') || (source === 'ico' && medium === 'referral'))) return {};
    const result = { utm_source: source, utm_medium: medium, utm_campaign: campaign };
    const content = params.get('utm_content')?.toLowerCase();
    return content && placements.has(content) ? { ...result, utm_content: content } : result;
  } catch {
    return {};
  }
}

/** @param {string} href @param {Record<string, string>} campaign @returns {string | null} */
export function analyticsLocation(href, campaign = readCampaign(href)) {
  try {
    const url = new URL(href);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    if (!publicPaths.has(path)) return null;
    const clean = new URL(`${url.origin}${path}`);
    // Re-validate even an in-memory campaign, keeping this boundary safe for all callers.
    const validated = readCampaign(`${url.origin}/?${new URLSearchParams(campaign)}`);
    clean.search = new URLSearchParams(validated).toString();
    return clean.toString();
  } catch {
    return null;
  }
}

/** @param {string} referrer @param {string | null} [previousLocation] @returns {string} */
export function analyticsReferrer(referrer, previousLocation = null) {
  const previous = previousLocation && analyticsLocation(previousLocation);
  if (previous) return previous;
  try {
    const url = new URL(referrer);
    return url.protocol === 'https:' && publisherHosts.has(url.hostname) ? `${url.origin}/` : '';
  } catch {
    return '';
  }
}
