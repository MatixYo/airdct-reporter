import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const dump1090Folder = process.env.DUMP1090_FOLDER;
const aircraftFilename = 'aircraft.json';

const apis = Object.entries(process.env).filter(([key]) => key.startsWith('API_URL_'));

while(!fs.existsSync(dump1090Folder)) {
  await new Promise(resolve => setTimeout(resolve, 250));
}

console.log(`Starting watching ${dump1090Folder} for ${aircraftFilename}`);

fs.watch(dump1090Folder, (event, filename) => {
  if(filename !== aircraftFilename) return;
  const body = fs.readFileSync(`${dump1090Folder}/${aircraftFilename}`);

  apis.forEach(async (api) => {
    try {
      const result = await fetch(api[1], {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body,
      });
      console.log(`Sent correctly to ${api[1]}.`);
    } catch (error) {
      console.error(`Failed to send aircraft data to ${api[1]}: ${error}`);
    }
  })
});
