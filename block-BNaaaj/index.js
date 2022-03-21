var path = require('path');
console.log('Welcome to Nodejs')

var os = require('os');
var freeM = os.freemem();
var cpus = os.cpus().length;


console.log(freeM,cpus);

function areaOfSquare(a){
  return a*a;
}
function rectangle(l,b) {
 return l*b;
}
function circle(r) {
  return 3.14 * r*r;
 }

 var buff1 = Buffer.alloc(20);
 buff1.write('buffer in nodejs');

 buff1.toString();
