const { fstat } = require('fs');
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
  console.log(req.method,req.url)
  if(req.method === 'GET' && req.url === 'index.html') {
    res.setHeader('Content-Type','text/html')
    fs.createReadStream('./index.html').pipe(res);
  }
}

server.listen( 3000, ()=>{
  console.log( ' Server is listening on port 3000 ' );
} );