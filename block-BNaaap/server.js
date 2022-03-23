var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 201;
  res.end('Hello Vandana')
}

server.listen(4444, () => {
  console.log('server listening on port 4000')
})
