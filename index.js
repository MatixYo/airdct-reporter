const fs = require('fs');
require('dotenv').config();
const fetch = require('node-fetch');

const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';
const apis = process.env.filter(x => x.startsWith('API_URL_'));
console.log(apis)

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const fileContent = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);
  const body = JSON.parse(fileContent);

  apis.forEach((api) => {
    fetch(api, {
      body
    });
  })
  console.log(`${filename}`, data.aircraft.length);
});
