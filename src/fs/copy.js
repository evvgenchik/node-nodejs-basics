import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from 'fs';

const copy = async () => {
  const src = path.join(__dirname, 'files');
  const dest = path.join(__dirname, 'files_copy');
  fs.cp(
    src,
    dest,
    { recursive: true, errorOnExist: true, force: false },
    (err) => {
      if (err) throw Error('FS operation failed');
    }
  );
};

await copy();
