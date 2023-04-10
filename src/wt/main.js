import path from 'node:path';
import { Worker } from 'node:worker_threads';
import * as url from 'url';
import os from 'os';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
  const cpusAmount = os.cpus().length;
  const src = path.join(__dirname, 'worker.js');
  const arrPromises = [];

  for (let i = 0; i <= cpusAmount; i++) {
    arrPromises.push(
      new Promise((res, rej) => {
        const worker = new Worker(src, { workerData: i + 10 });

        worker.on('message', (value) =>
          res({ status: 'resolved', data: value })
        );
        worker.on('error', () => res({ status: 'error', data: null }));
      })
    );
  }
  const result = await Promise.allSettled(arrPromises);
  console.log(result.map((el) => el.value));
};

await performCalculations();
