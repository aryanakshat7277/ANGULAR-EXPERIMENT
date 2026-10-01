const http = require('http');

const routes = [
  { name: 'Root Redirect Route', path: '/' },
  { name: 'Student View (Modules 1-7)', path: '/student' },
  { name: 'Nested Child Result Route (Exp 6.5)', path: '/student/result' },
  { name: 'Course View (Exp 2.8, 6.1)', path: '/course' },
  { name: 'Parent-Child View (Module 4)', path: '/parent' },
  { name: 'Academic Dashboard (Exp 4.8)', path: '/dashboard' },
  { name: 'Polyfills Bundle', path: '/polyfills.js' },
  { name: 'Main Application Bundle', path: '/main.js' },
  { name: 'Styles CSS', path: '/styles.css' }
];

function checkUrl(route) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:4200${route.path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          name: route.name,
          path: route.path,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          preview: data.substring(0, 150).replace(/\s+/g, ' ')
        });
      });
    });
    req.on('error', (err) => {
      resolve({
        name: route.name,
        path: route.path,
        status: 'ERROR',
        error: err.message
      });
    });
  });
}

async function run() {
  console.log('================================================================');
  console.log('🌐 TESTING LOCALHOST:4200 ENDPOINTS AND CLIENT-SIDE SPA ROUTING');
  console.log('================================================================\n');

  let passed = 0;
  for (const r of routes) {
    const res = await checkUrl(r);
    if (res.status === 200) {
      console.log(`✅ [${res.status}] ${res.name} (${res.path}) - ${res.length} bytes`);
      passed++;
    } else {
      console.log(`❌ [${res.status}] ${res.name} (${res.path})`);
    }
  }

  console.log('\n================================================================');
  console.log(`🏁 LOCALHOST VERIFICATION: ${passed}/${routes.length} ROUTES ACTIVE & SERVING`);
  console.log('================================================================\n');
}

run();
