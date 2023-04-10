import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

async function exists(path) {
  try {
    await fs.promises.access(path);
    return true;
  } catch {
    return false;
  }
}

const rename = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');
  const isOldFileExist = !(await exists(oldPath));
  const isNewFileExist = await exists(newPath);
  fs.rename(oldPath, newPath, (err) => {
    if (err || isNewFileExist || isOldFileExist) {
      console.log(err);

      throw Error('FS operation failed');
    }
  });
};

await rename();
