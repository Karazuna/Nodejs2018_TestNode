function start(res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello, start!');
    res.end();
    // return 'Hello, start!!';
}

function hello(res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello, hello!');
    res.end();
    // return 'Hello, hello!!';
}

exports.start = start;
exports.hello = hello;