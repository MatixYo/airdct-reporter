const fs = require('fs');
require('dotenv').config();

const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const fileContent = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);
  const data = JSON.parse(fileContent);
  console.log(`${filename}`, data.aircraft.length);
});
