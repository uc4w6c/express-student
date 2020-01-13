const http = require('http')

var app = function(req, res, next) {
  app.handle(req, res, next);
};

const Hello = {
  say: function() {
    console.log('Hi!' + this.name);
  }
};
var hello = Object.create(Hello);

app.hello = Object.create(hello, {
  name: { value: 'Taro' }
})
app.hello.say();

app.handle = function handle(req, res, callback) {
  console.log('hello');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}
http.createServer(app).listen(3000);

/**
 * フレームワークを利用せずにhttp通信を試す
 */
/*
http.createServer(function (request, response) {
    console.log(request);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  }).listen(3000, '127.0.0.1');
*/