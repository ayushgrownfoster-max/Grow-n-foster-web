const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  // E Commerce Website
  { name: 'ecom-1', id: 'photo-1563013544-824ae1b704d3' }, // Person with laptop & card shopping online
  { name: 'ecom-2', id: 'photo-1556740758-90de374c12ad' }, // Online purchase checkout
  { name: 'ecom-3', id: 'photo-1460925895917-afdab827c52f' }, // Web analytics / online shop performance
  { name: 'ecom-4', id: 'photo-1516321318423-f06f85e504b3' }, // Digital commerce / web app interaction

  // Website Maintenance & Support
  { name: 'maint-1', id: 'photo-1604307410297-081e0677d3fb' }, // Developer debugging code on laptop screen
  { name: 'maint-2', id: 'photo-1633791583517-c828e6f851a9' }, // Dual monitor workspace with code and diagnostics
  { name: 'maint-3', id: 'photo-1551434678-e076c223a692' }, // Tech support team working on platform updates
  { name: 'maint-4', id: 'photo-1517245386807-bb43f82c33c4' }, // Tech team troubleshooting system issue
  { name: 'maint-5', id: 'photo-1573496359142-b8d87734a5a2' }, // IT technical support specialist
  { name: 'maint-6', id: 'photo-1498050108023-c5249f4df085' }, // Developer coding on MacBook
  { name: 'maint-7', id: 'photo-1522071820081-009f0129c71c' }, // Team reviewing web app performance
  { name: 'maint-8', id: 'photo-1504384308090-c894fdcc538d' }  // Technical support workspace
];

const testDir = path.join(__dirname, 'public', 'services', 'web-dev', 'test');
if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

async function download(c) {
  const url = `https://images.unsplash.com/${c.id}?w=800&auto=format&fit=crop&q=80`;
  const dest = path.join(testDir, `${c.name}.jpg`);
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(`${c.name} failed with status ${res.statusCode}`);
        return resolve();
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        const stats = fs.statSync(dest);
        console.log(`${c.name} (${c.id}): ${stats.size} bytes`);
        resolve();
      });
    }).on('error', (err) => {
      console.log(`${c.name} error:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const c of candidates) {
    await download(c);
  }
})();

