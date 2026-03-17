import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zebbingo.com'

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/safety`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/privacy_policy`, lastModified: new Date(), priority: 0.5 },
  ]
}
