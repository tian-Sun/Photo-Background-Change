import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aiheadshotgen.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/blog',
        '/blog/*',
        '/blog/who-should-use-ai-headshot-generator',
        '/blog/how-to-create-professional-ai-headshot-in-three-minutes',
        '/blog/ai-headshot-generator-vs-traditional-studio',
        '/privacy',
        '/terms',
      ],
      disallow: [
        '/api/',
        '/api/auth/',
        '/login',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 