const fs = require('fs');
require('dotenv').config();

const dump1090file = '/run/dump1090-fa/aircraft.json';

fs.watch(process.env.DUMP1090_LOCATION, (event, filename) => {
  const fileContent = fs.readFileSync(dump1090file);
  const data = JSON.parse(fileContent);
  console.log(`${filename}`, data.aircraft.length);
});
