import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  fs.writeFile(file, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw Error('FS operation failed');
  });
};

await create();
