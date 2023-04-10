const parseArgs = () => {
  const arrArgvs = process.argv.slice(2);
  for (let i = 0; i < arrArgvs.length; i += 2) {
    console.log(`${arrArgvs[i].replace('--', '')} is ${arrArgvs[i + 1]}`);
  }
};

parseArgs();
