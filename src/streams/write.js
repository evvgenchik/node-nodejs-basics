import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
  const src = path.join(__dirname, 'files', 'fileToWrite.txt');
  const stream = fs.createWriteStream(src);

  process.stdin.on('data', (data) => {
    stream.write(data);
  });
};

await write();
