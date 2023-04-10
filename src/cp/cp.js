import path from 'node:path';
import * as url from 'url';
import { fork } from 'node:child_process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
  const src = path.join(__dirname, 'files', 'script.js');
  const childProcess = fork(src, [args]);
};

spawnChildProcess([1, 2, 3, 4]);
