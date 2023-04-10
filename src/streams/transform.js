import * as url from 'url';
import { Transform, pipeline } from 'stream';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const readeble = process.stdin;
const writable = process.stdout;

const mytransform = new Transform({
  transform(chunck, enc, clb) {
    const chunkReverse = chunck.toString().trim().split('').reverse().join('');
    clb(null, chunkReverse + '\n');
  },
});

const transform = () => {
  pipeline(readeble, mytransform, writable, (err) => console.log(err));
};

await transform();
