import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const projectsFile = path.join(rootDir, 'src/data/projects.json');
const writingsDir = path.join(rootDir, 'src/data/writings');
const sitemapFile = path.join(rootDir, 'public/sitemap.xml');

const DOMAIN = 'https://avibhardwaj.com';
const today = new Date().toISOString().split('T')[0];

const projects = JSON.parse(fs.readFileSync(projectsFile, 'utf-8'));
const writingFiles = fs.readdirSync(writingsDir).filter((f) => f.endsWith('.json'));

const urls = [
  { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'monthly' },
  { loc: `${DOMAIN}/projects`, priority: '0.8', changefreq: 'monthly' },
];

projects.forEach((p) => {
  if (p.slug) {
    urls.push({
      loc: `${DOMAIN}/projects/${p.slug}`,
      lastmod: p.date ? (p.date.length === 7 ? `${p.date}-01` : p.date) : today,
      priority: '0.7',
    });
  }
});

urls.push({ loc: `${DOMAIN}/notes`, priority: '0.8', changefreq: 'weekly' });

writingFiles.forEach((file) => {
  const content = JSON.parse(fs.readFileSync(path.join(writingsDir, file), 'utf-8'));
  if (content.slug) {
    urls.push({
      loc: `${DOMAIN}/notes/${content.slug}`,
      lastmod: content.date ? content.date : today,
      priority: '0.7',
    });
  }
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}${
      u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : ''
    }
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapFile, xml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${urls.length} URLs.`);
