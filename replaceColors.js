const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(file => {
    let full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full, cb);
    else cb(full);
  });
}

walk('src', (file) => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace old yellow amber #fbbf24 and its rgb (251,191,36)
    content = content.replace(/251,\s*191,\s*36/g, '238, 193, 91');
    content = content.replace(/#fbbf24/g, 'var(--gold-400)');
    
    fs.writeFileSync(file, content);
  }
});
console.log('Replaced hardcoded inline colors with dark mode gold aesthetic');
