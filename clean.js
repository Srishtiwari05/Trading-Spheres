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
  if (file.endsWith('.tsx') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove background blobs
    content = content.replace(/<div[^>]*className=["']?bg-blob["']?[^>]*\/>/g, '');
    
    // Convert components to dark theme backgrounds without muddy gradients
    content = content.replace(/background:\s*['"]?linear-gradient[^'"]*['"]?,?/g, 'background: "var(--navy-900)",');
    content = content.replace(/background:\s*["']rgba\(2,8,23,0\.9\).*?["']/g, 'background: "var(--navy-950)"');
    
    fs.writeFileSync(file, content);
  }
});
console.log('Cleaned aesthetic blobs and gradients');
