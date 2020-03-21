const http = require('http');
const os = require('os');

console.log("kube server starting...");

var handler = function (request, response) {
  console.log("Recieved request from " + request.connectinRemoteAddress);
  response.writeHead(200);
  response.end("You hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
