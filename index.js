const fs = require('fs');
require('dotenv').config();

const aircraftFilename = 'aircraft.json';

fs.watch(process.env.DUMP1090_FOLDER, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const fileContent = fs.readFileSync(dump1090file);
  const data = JSON.parse(fileContent);
  console.log(`${filename}`, data.aircraft.length);
});
