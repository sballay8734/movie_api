import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

// Create Server
http.createServer((request, response) => {
  let addr = request.url,
  q = url.parse(addr, true),
  filePath = '';

  // Add requests to log file
  fs.appendFile('log.txt', `URL: ${addr}\nTimestamp: ${new Date()}\n\n`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.')
    }
  })

  // check if pathname includes 'documentation'
  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html'
  }

  // Read file & write data to page
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

}).listen(8080)