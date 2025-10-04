import fs from 'fs';
import path from 'path';
import { POSTS } from '../src/data/posts.ts';

const OUTPUT_DIR = './dist';
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');
const BASE_URL = 'https://week-to-ready.com';

const staticRoutes = [
  '/',
  '/book',
  '/contact',
  '/posts',
  '/starter-pack',
  '/privacy',
];

async function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const postSlugs = POSTS.map((post) => post.slug);

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRoutes
        .map(
          (route) => `
        <url>
          <loc>${BASE_URL}${route}</loc>
          <lastmod>${today}</lastmod>
        </url>
      `,
        )
        .join('')}
      ${postSlugs
        .map(
          (slug) => `
        <url>
          <loc>${BASE_URL}/posts/${slug}</loc>
          <lastmod>${today}</lastmod>
        </url>
      `,
        )
        .join('')}
    </urlset>
  `.trim();

  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();