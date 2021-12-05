import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';

const apis = Object.entries(process.env).filter(([key]) => key.startsWith('API_URL_'));

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const body = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);

  apis.forEach(async (api) => {
    fetch(api[1], {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body,
    });
  })
});
