const fs = require('fs');

const dump1090file = '/run/dump1090-fa/aircraft.json';

fs.watch(dump1090file, (event, filename) => {
  const data = fs.readFileSync(dump1090file);
  console.log(`${filename} file Changed`, data);
});
