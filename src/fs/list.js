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

const list = async () => {
  const src = path.join(__dirname, 'files');
  const isileExist = await exists(src);
  fs.readdir(src, (err, files) => {
    if (err || !isileExist) {
      throw Error('FS operation failed');
    }

    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
