import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = [
  '/',
  '/business',
  '/company/greeting',
  '/company/history',
  '/company/location',
  '/production',
  '/development',
  '/contact',
  '/products/bldc',
  // Product Details
  '/products/bldc/BL001',
  '/products/bldc/BL002',
  '/products/bldc/BL003',
  '/products/bldc/BL004',
];

(async () => {
  console.log('Building for production...');
  // Ensure we have a build to serve
  // Note: You should run `npm run build` before this script
  
  console.log('Starting preview server...');
  const server = await preview({
    preview: { port: 4173 },
    configFile: false,
    root: toAbsolute('.'),
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routesToPrerender) {
      const page = await browser.newPage();
      
      console.log(`Prerendering: ${route}`);
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
      });

      // Ensure content is loaded (look for footer which is on every page)
      await page.waitForSelector('.footer');

      const html = await page.content();
      
      // Determine file path
      const filePath = route === '/' 
        ? 'dist/index.html' 
        : `dist${route}/index.html`;
        
      const dirPath = path.dirname(toAbsolute(filePath));
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(toAbsolute(filePath), html);
      console.log(`Generated: ${filePath}`);
      
      await page.close();
    }
  } catch (e) {
    console.error('Error during prerendering:', e);
    process.exit(1);
  } finally {
    await browser.close();
    server.httpServer.close();
    console.log('Prerendering complete!');
    process.exit(0);
  }
})();
