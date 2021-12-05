const fs = require('fs');

const dump1090file = '/run/dump1090-fa';

fs.watch(dump1090file, (event, filename) => {
  if (filename) {
    console.log(`${filename} file Changed`);
  }
});
