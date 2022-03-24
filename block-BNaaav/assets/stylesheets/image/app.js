const { fstat } = require('fs');
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url)

  if (req.method === 'GET' && req.url === 'index.html') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('./index.html').pipe(res);
  }

  if (req.method === 'GET' && req.url === 'about.html') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('./index.html').pipe(res);
  }

  if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content)
    })
  }
  if (req.methods === 'GET' && req.url === '/images') {
    res.setHeader('Content-Type', 'image/jpeg');
    fs.readFile('.assests/images' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    })
  }


};

server.listen(3000, () => {
  console.log(' Server is listening on port 3000 ');
})

