const http = require('http')

/**
 * フレームワークを利用せずにhttp通信を試す
 */
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  }).listen(3000, '127.0.0.1');
  