# About
In order to use this script you need to have a running dump1090 instance installed on your Raspberry Pi.
This script watches changes to aircraft.json file and submits them to a list of endpoints.
It also adds machineId param with unique ID of device this script is running on.

# Installation using script
Run the following script in console:

`sudo bash -c "$(wget -O - https://raw.githubusercontent.com/MatixYo/overflights-reporter/main/install.sh)"`

## Installation
1. Install Node using [NVM](https://github.com/nvm-sh/nvm).
2. SSH into PI. Go to `~` directory and run following `git clone https://github.com/MatixYo/airdct-reporter.git`
3. Run `npm install` and `npm run start` to verify it works
4. Install PM2 to run the app in the background: `sudo npm install -g pm2 `
5. Run `pm2 start index.js` to start the app in the background
6. Save `pm2 save`
7. Run `pm2 startup`
8. You will see output with instructions. You still have to follow the instructions to make pm2 start automatically on reboot.
