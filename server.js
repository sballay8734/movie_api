// built in modules
import * as http from 'http';


http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/plain' }); // 200 = 'OK'
  response.end('Hello Node!\n');
}).listen("8080")

console.log("Hello");














































