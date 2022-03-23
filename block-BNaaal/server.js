var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Hello Vandana')
}

server.listen(4000, (localhost) => {
  console.log('server listening on port 4000')
})