const fs = require('fs');

const dump1090file = '/run/dump1090-fa';
fs.watchFile(dump1090file, (curr, prev) => {
  console.log(`The current mtime is: ${curr.mtime}`);
  console.log(`The previous mtime was: ${prev.mtime}`);
  console.log(`The file has been modified`);
});
