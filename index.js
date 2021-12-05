import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';

const apis = Array.from(process.env).filter(x => x.startsWith('API_URL_'));

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const fileContent = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);
  const body = JSON.parse(fileContent);

  apis.forEach((api) => {
    console.log(`Submitting to ${api} ${data.aircraft.length} aircraft`);
    fetch(api, {
      body
    });
  })
});
