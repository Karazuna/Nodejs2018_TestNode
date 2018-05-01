const http = require('http');
const url = require('url');

exports.start = function (port, host, route, handle) {
    // module.exports = function(port, host) {
    function onRequest(req, res) { //요청 올때 응답에 대한 정의
        //let sPathname = url.parse(req.url).pathname;//url 요청에 대한 parse가 pathname으로
        // let content = route(sPathname, handle);
        // route(sPathname);
        // res.writeHead(200, {'Content-type': 'text/html'});
        // res.write(content);
        // res.end();
        let sPathname = url.parse(req.url).pathname;

        req.setEncoding('utf-8');
        req.addListener('data', function (dataChunk) {
            sPostData += dataChunk;
            console.log('Chunk = ' + dataChunk);
        });
        req.addListener('end',
            route(sPathname, handle, res, sPostData));
    }

    http.createServer(onRequest).listen(port, host);
    console.log('Server is running at ' + host + ':' + port);
}
// exports.start = start;


// let server = http.createServer(onRequest);
// server.listen(nPort, sHost);
// console.log('Server is running at localhost:8000');