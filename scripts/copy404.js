// scripts/copy404.js
import { copyFile } from 'fs/promises';

copyFile('dist/index.html', 'dist/404.html')
  .then(() => console.log('✅ index.html copied to 404.html'))
  .catch((err) => console.error('❌ Failed to copy 404.html:', err));
