const parseEnv = () => {
  const arr = [];
  const objEnv = process.env;
  for (let key in objEnv) {
    if (key.startsWith('RSS_')) arr.push(`${key}=${objEnv[key]}`);
  }
  arr.forEach((el) => console.log(el));
};

parseEnv();
