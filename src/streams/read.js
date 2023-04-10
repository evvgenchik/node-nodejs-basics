import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const src = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = fs.createReadStream(src);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
  stream.on('error', (err) => {
    console.log(console.log(err));
  });
};

await read();
