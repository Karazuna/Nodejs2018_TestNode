// global.console.log("흑흑 오늘 밥은 맛있었다");
// console.log(console);
// console.log(typeof console === 'object');
// console.log('Node.js version : ' + process.version);
// console.log(process.memoryUsage());
// console.log(process.env);
// console.log(module);


/* const circle = require('./circle');

console.log('Area of a circle = ' + circle.area(3));
console.log('Circumference of a circle = ' + circle.circum(3));
console.log('PI = ' + circle.pi); */

/* const square = require('./square');
let mySquare = square(5);
mySquare.width = 10;
console.log('Area of a square = ' + mySquare.area());
console.log('Circumference of a square = ' + mySquare.circum()); */

/* const os = require('os');
console.log(os.type());
console.log(os.cpus()); */

const http = require('http');
let server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hello, world!');
    res.end();
})
server.listen(8000, 'localhost');
console.log('Server is running at localhost:8080');