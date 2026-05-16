const puppeteer = require('puppeteer');

const pagesToCapture = [
  { path: '/', name: 'attack_graph.png' },
  { path: '/projects', name: 'projects.png' },
  { path: '/stride', name: 'stride.png' },
  { path: '/architecture', name: 'architecture.png' },
  { path: '/findings', name: 'findings.png' },
  { path: '/training', name: 'training.png' },
  { path: '/reports', name: 'reports.png' },
  { path: '/burp', name: 'burp.png' }
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 }); // High-res for marketing

  for (const { path, name } of pagesToCapture) {
    console.log(`Capturing ${path}...`);
    try {
      await page.goto(`http://127.0.0.1:5173${path}`, { waitUntil: 'networkidle0', timeout: 15000 });
      // Wait for any animations or React suspensions to settle
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: `public/images/${name}` });
      console.log(`Saved public/images/${name}`);
    } catch (e) {
      console.error(`Failed to capture ${path}:`, e.message);
    }
  }

  await browser.close();
})();
