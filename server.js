// built in modules
import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';


http.createServer((request, response) => {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Hello Node!');
}).listen(8080);














































