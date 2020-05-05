/* eslint-disable no-console */
let fs = require('fs');
let path = require('path');

fs.readFile(
  path.join(__dirname, '../extension-app/src/constants/uri.ts'),
  'utf-8',
  (err, data) => {
    if (err) {
      console.log(err);
    }

    let deploymentUri = `export const API_URL = 'https://hiddenstash-backend.herokuapp.com/api';\n`;

    fs.writeFile(
      path.join(__dirname, '../extension-app/src/constants/uri.ts'),
      deploymentUri,
      (error) => {
        if (error) {
          console.log(error);
        }
        console.log('done changing BE uri');
      },
    );
  },
);

fs.readFile(
  path.join(__dirname, '../extension/src/constants/uri.ts'),
  'utf-8',
  (err, data) => {
    if (err) {
      console.log(err);
    }

    let deploymentUri = `export const APP_URI = 'https://5eaafe2c6ee0cd77d4dac801--hiddenstash-extension-app.netlify.app/';\n`;

    fs.writeFile(
      path.join(__dirname, '../extension/src/constants/uri.ts'),
      deploymentUri,
      (error) => {
        if (error) {
          console.log(error);
        }
        console.log('done changing iframe uri');
      },
    );
  },
);
