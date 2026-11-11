const https = require('https');

function getPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : 'https://unsplash.com' + res.headers.location;
        console.log('Redirecting to:', nextUrl);
        return resolve(getPage(nextUrl));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function search(term) {
  const res = await getPage('https://unsplash.com/s/photos/' + encodeURIComponent(term));
  console.log(`\n=== Query: ${term} (Status: ${res.status}) ===`);
  const regex = /https:\/\/images\.unsplash\.com\/(photo-[0-9a-zA-Z\-_]+)\?([^"'\s>]+)/g;
  const photos = new Map();
  let m;
  while ((m = regex.exec(res.data)) !== null) {
    if (!photos.has(m[1])) {
      photos.set(m[1], m[0]);
    }
  }
  for (const [id] of Array.from(photos.entries()).slice(0, 8)) {
    console.log(`https://images.unsplash.com/${id}?w=800&auto=format&fit=crop&q=80`);
  }
}

async function run() {
  await search('online-store-website');
  await search('customer-support-computer');
}

run();
