import * as url from 'url';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
  const srcWrite = path.join(__dirname, 'files', 'fileToCompress.txt');
  const srcRead = path.join(__dirname, 'files', 'archive.gz');
  const readeble = createReadStream(srcRead);
  const writable = createWriteStream(srcWrite);
  const gzip = createGunzip();

  pipeline(readeble, gzip, writable, (err) => console.log(err));
};

await decompress();
