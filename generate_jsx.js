const https = require('https');

const tools = [
  { name: 'C++', icon: 'cplusplus', color: '#00599C', logoColor: '#ffffff' },
  { name: 'PYTHON', icon: 'python', color: '#3776AB', logoColor: '#FFD43B' },
  { name: 'C', icon: 'c', color: '#A8B9CC', logoColor: '#ffffff' },
  { name: 'JAVA', icon: 'openjdk', color: '#ED8B00', logoColor: '#ffffff' },
  { name: 'MYSQL', icon: 'mysql', color: '#4479A1', logoColor: '#ffffff' },
  { name: 'VS CODE', icon: 'visualstudiocode', color: '#007ACC', logoColor: '#ffffff' },
  { name: 'GITHUB', icon: 'github', color: '#181717', logoColor: '#ffffff' },
  { name: 'RENDER', icon: 'render', color: '#46E3B7', logoColor: '#ffffff' },
  { name: 'VERCEL', icon: 'vercel', color: '#000000', logoColor: '#ffffff' },
  { name: 'AIVEN', icon: 'aiven', color: '#FF3366', logoColor: '#ffffff' }
];

async function fetchPath(icon) {
  return new Promise(resolve => {
    https.get(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${icon}.svg`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/d="([^"]+)"/);
        resolve(match ? match[1] : '');
      });
    });
  });
}

async function run() {
  let jsx = '';
  for (const t of tools) {
    const p = await fetchPath(t.icon);
    jsx += `
            <div style={{ display: 'flex', alignItems: 'center', background: '${t.color}', padding: '0 8px 0 6px', borderRadius: 4, height: 28, gap: 6 }}>
              <svg fill="${t.logoColor}" width="14" height="14" viewBox="0 0 24 24"><path d="${p}"/></svg>
              <span style={{ color: '#ffffff', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px' }}>${t.name}</span>
            </div>`;
  }
  require('fs').writeFileSync('jsx_output.txt', jsx);
}
run();
