const http = require('http');
let nPort = 8000;
let sHost = 'localhost';

function start() {
    function onRequest(req, res){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Hello, world!');
        res.end();
    }
    
    http.createServer(onRequest).listen(nPort, sHost);
    console.log('Server is running at ' + sHost + ':' + nPort);
}
exports.start = start;

// let server = http.createServer(onRequest);
// server.listen(nPort, sHost);
// console.log('Server is running at localhost:8000');