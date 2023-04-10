import fs from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
  const src = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  fs.readFile(src, 'utf-8', (err, data) => {
    if (err) throw Error('Read file error');
    console.log(
      Buffer.from(createHash('sha256').update('bacon').digest('hex')).toString(
        'base64'
      )
    );
  });
};

await calculateHash();
