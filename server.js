const http = require('http'),
      url = require('url'),
      fs = require('fs');

// Create Server
http.createServer((request, response) => {
  let addr = request.url;
  let q = url.parse(addr, true);
  let filePath = '';

  // log requests to log.txt
  fs.appendFile('log.txt', `URL: ${addr}\nTimestamp: ${new Date()}\n\n`, (err) => {
    if (err) {
      throw err;
    }
  })

  // check for pathname
  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  // read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
    }

    // tell browser content type
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // write data
    response.write(data);
    response.end();

  })

}).listen(8080)






