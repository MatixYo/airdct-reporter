import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';

const apis = Object.entries(process.env).filter(([key]) => key.startsWith('API_URL_'));

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const fileContent = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);
  const body = JSON.parse(fileContent);

  apis.forEach(async (api) => {
    console.log('Submitting to', api, `${body.aircraft.length} aircraft`);
    const response = await fetch(api[1], {
      method: 'POST',
      body
    }).then(res => res.json());
    console.log(response);
  })
});
