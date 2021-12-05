##Installation

1. Install Node using [NVM](https://github.com/nvm-sh/nvm).
2. SSH into PI. Go to `~` directory and run following `git clone https://github.com/MatixYo/airdct-reporter.git`
3. Run `npm install` and `npm run start` to verify it works
4. Install PM2 to run the app in the background: `sudo npm install -g pm2 `
5. Run `pm2 start index.js` to start the app in the background
6. Save `pm2 save`
7. Run `pm2 startup`
8. You will see output with instructions. You still have to follow the instructions to make pm2 start automatically on reboot.
