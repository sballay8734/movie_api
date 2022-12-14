// built in modules
import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';


// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-type': 'text/plain' }); // 200 = 'OK'
//   response.end('Hello Node!\n');
// }).listen("8080")

// console.log("Hello");

fs.readFile('file.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Data read: " + data);
})













































