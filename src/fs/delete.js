import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

async function exists(path) {
  try {
    await fs.promises.access(path);
    return true;
  } catch {
    return false;
  }
}

const remove = async () => {
  const src = path.join(__dirname, 'files', 'fileToRemove.txt');
  fs.rm(src, (err) => {
    if (err) throw Error('FS operation failed');
  });
};

await remove();
