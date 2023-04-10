import * as url from 'url';
import { Transform, pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
  const srcRead = path.join(__dirname, 'files', 'fileToCompress.txt');
  const srcWrite = path.join(__dirname, 'files', 'archive.gz');
  const readeble = createReadStream(srcRead);
  const writable = createWriteStream(srcWrite);
  const gzip = createGzip();

  pipeline(readeble, gzip, writable, (err) => console.log(err));
};

await compress();
