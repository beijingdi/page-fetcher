let fs = require('fs');
let request = require('request');
let address= process.argv.slice[2];
let save = process.argv.slice[3];
const downloadFile = function(address,cb) {
  request(address, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    size = body.length;
    cb(body, save);
  });
  
}

const saveFile = (content, save) => {
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${size} to ${save}`);
  });
};


downloadFile(address,saveFile);








