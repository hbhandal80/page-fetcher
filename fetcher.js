const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    fs.writeFile(path, body, (error) => {
    console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`);
    });
    }
});