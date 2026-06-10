const fs = require('fs');
let content = fs.readFileSync('readme.source.md', 'utf8');

content = content.replace(/src="(https:\/\/img\.shields\.io\/badge\/([^"]+))"/g, (match, url) => {
  const encoded = encodeURIComponent(url);
  return `src="https://wsrv.nl/?url=${encoded}&output=png"`;
});

fs.writeFileSync('readme.source.md', content);
console.log('Done!');
