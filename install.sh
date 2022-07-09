#!/bin/bash

# 1. Install NVM
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install node
nvm use node

# 2. Install Git
sudo apt update
sudo apt install git

# 2. Clone app and install dependencies
cd ~
git clone https://github.com/MatixYo/airdct-reporter.git
cd airdct-reporter
npm install

# 3. Start app
npm install -g pm2
pm2 start index.js
pm2 save
pm2 startup
