var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {

  if(req.method === 'GET' && req.url === '/') {
    res.write('Welcome to Index page')
    res.end()
  }
  if(req.method === 'GET' && req.url === '/about') {
   res.setHeader('Content-Type','text/html');
   fs.createReadStream('./node.html').pipe(res);
  }
}
server.listen(3000, () => {
  console.log('server listening on port 3k')
});
