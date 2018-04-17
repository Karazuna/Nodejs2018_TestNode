const http = require('http');
const url = require('url');

exports.start = function(port, host, route, handle) {
// module.exports = function(port, host) {
    function onRequest(req, res){
        let sPathname = url.parse(req.url).pathname;
        let content = route(sPathname, handle);
        // route(sPathname);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(content);
        res.end();
    }

    http.createServer(onRequest).listen(port, host);
    console.log('Server is running at ' + host + ':' + port);
}
// exports.start = start;


// let server = http.createServer(onRequest);
// server.listen(nPort, sHost);
// console.log('Server is running at localhost:8000');