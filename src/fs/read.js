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

const read = async () => {
  const src = path.join(__dirname, 'files', 'fileToRead.txt');
  const isileExist = await exists(src);
  fs.readFile(src, 'utf8', (err, data) => {
    if (err || !isileExist) {
      throw Error('FS operation failed');
    }

    console.log(data);
  });
};

await read();
