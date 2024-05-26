/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'src', '_redirects');
const destDir = path.join(__dirname, 'dist');
const destFile = path.join(destDir, '_redirects');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

fs.copyFileSync(source, destFile);
