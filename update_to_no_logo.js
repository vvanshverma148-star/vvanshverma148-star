const fs = require('fs');
const content = fs.readFileSync('readme.source.md', 'utf8');

const tools = [
  { name: 'C++', hex: '#00599C', rgb: '0, 89, 156' },
  { name: 'Python', hex: '#3776AB', rgb: '55, 118, 171' },
  { name: 'C', hex: '#A8B9CC', rgb: '168, 185, 204' },
  { name: 'Java', hex: '#ED8B00', rgb: '237, 139, 0' },
  { name: 'MySQL', hex: '#4479A1', rgb: '68, 121, 161' },
  { name: 'VS Code', hex: '#007ACC', rgb: '0, 122, 204' },
  { name: 'GitHub', hex: '#ffffff', rgb: '255, 255, 255' },
  { name: 'Render', hex: '#46E3B7', rgb: '70, 227, 183' },
  { name: 'Vercel', hex: '#ffffff', rgb: '255, 255, 255' },
  { name: 'Aiven', hex: '#FF3366', rgb: '255, 51, 102' }
];

let languagesJsx = `          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>\n`;
tools.forEach(t => {
  languagesJsx += `            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(${t.rgb}, 0.15)', padding: '6px 14px', borderRadius: 16, border: '1px solid rgba(${t.rgb}, 0.3)' }}>
              <span style={{ color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2px' }}>${t.name}</span>
            </div>\n`;
});
languagesJsx += `          </div>`;

// Replace languages block
let newContent = content.replace(/<div style=\{\{ display: 'flex', flexWrap: 'wrap', gap: 10 \}\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\}\)\(\)/, languagesJsx + `\n        </div>\n      </div>\n    </div>\n  );\n})()`);

// Social blocks
const socialRegex = /```aura width=130 height=44 link="https:\/\/www\.linkedin\.com\/in\/vvanshverma" inline align=center[\s\S]*?```\s*```aura width=120 height=44 link="mailto:hello@vvanshverma148\.com" inline align=center[\s\S]*?```\s*```aura width=140 height=44 link="https:\/\/instagram\.com\/vvanshverma" inline align=center[\s\S]*?```/;

const socialJsx = `\`\`\`aura width=90 height=36 link="https://www.linkedin.com/in/vvanshverma" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0, 119, 181, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(0, 119, 181, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>LinkedIn</span>
    </div>
  );
})()
\`\`\`
\`\`\`aura width=80 height=36 link="mailto:hello@vvanshverma148.com" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(234, 67, 53, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(234, 67, 53, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>Email</span>
    </div>
  );
})()
\`\`\`
\`\`\`aura width=100 height=36 link="https://instagram.com/vvanshverma" inline align=center
(function() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(228, 64, 95, 0.15)', width: '100%', height: '100%', borderRadius: 18,
      border: '1px solid rgba(228, 64, 95, 0.3)'
    }}>
      <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, fontFamily: 'Inter' }}>Instagram</span>
    </div>
  );
})()
\`\`\``;

newContent = newContent.replace(socialRegex, socialJsx);

fs.writeFileSync('readme.source.md', newContent);
