import { base } from '$app/paths';

export const patientBookingUrl = 'https://calendly.com/scherb-anavah-institute/30min';
export const providerBookingUrl = 'https://calendly.com/scherb-anavah-institute/services-for-providers';

/** True only for a real https://calendly.com/... event link. */
export function isCalendlyEventUrl(value: string): boolean {
  const candidate = value.trim();
  if (!candidate) return false;

  try {
    const url = new URL(candidate);
    const path = url.pathname.replace(/\/+$/, '');
    return url.protocol === 'https:' && url.hostname === 'calendly.com' && path.length > 1;
  } catch {
    return false;
  }
}

export const patientBookingHref = isCalendlyEventUrl(patientBookingUrl)
  ? patientBookingUrl.trim()
  : `${base}/contact`;

export const providerBookingHref = isCalendlyEventUrl(providerBookingUrl)
  ? providerBookingUrl.trim()
  : `${base}/providers#book`;
