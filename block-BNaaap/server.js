var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method)
  res.statusCode = 201;
  res.setHeader('Content-type','text/html');
  res.end('<h2>Hello Vandana</h1>')
}

server.listen(4444, () => {
  console.log('server listening on port 4444')
})
