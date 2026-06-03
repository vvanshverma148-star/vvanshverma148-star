const fs = require('fs');
const https = require('https');
const icons = ['cplusplus', 'python', 'c', 'openjdk', 'mysql', 'visualstudiocode', 'github', 'render', 'vercel', 'aiven'];

icons.forEach(i => {
  https.get(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${i}.svg`, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/d="([^"]+)"/);
      if (match) console.log(`${i}: ${match[1]}`);
    });
  });
});
