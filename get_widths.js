const https = require('https');
const fs = require('fs');

const tags = [
  "C%2B%2B-00599C?logo=c%2B%2B", "Java-ED8B00?logo=openjdk", "Python-3776AB?logo=python",
  "React-20232A?logo=react", "Next.js-000000?logo=next.js",
  "Node.js-339933?logo=node.js", "MySQL-4479A1?logo=mysql", "Vercel-000000?logo=vercel", "Render-46E3B7?logo=render",
  "TensorFlow-FF6F00?logo=tensorflow", "PyTorch-EE4C2C?logo=pytorch", "Pandas-150458?logo=pandas", "NumPy-013243?logo=numpy", "Scikit_Learn-F7931E?logo=scikit-learn", "Matplotlib-3776AB?logo=python", "Plotly-3F4F75?logo=plotly",
  "Adobe_Photoshop-31A8FF?logo=adobe%20photoshop", "Adobe_Creative_Cloud-DA1F26?logo=adobe%20creative%20cloud", "Canva-00C4CC?logo=canva", "GitHub-181717?logo=github"
];

async function getWidth(tag) {
  return new Promise((resolve) => {
    https.get(`https://img.shields.io/badge/${tag}&style=for-the-badge`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<svg[^>]*width="([0-9.]+)"/);
        resolve({ tag: tag.split('-')[0].replace(/%2B/g, '+'), width: match ? Math.round(match[1]) : 100 });
      });
    });
  });
}

async function run() {
  const widths = await Promise.all(tags.map(getWidth));
  const output = widths.map(w => `${w.tag}: ${w.width}`).join('\n');
  fs.writeFileSync('widths.txt', output);
  console.log('Done!');
}
run();
