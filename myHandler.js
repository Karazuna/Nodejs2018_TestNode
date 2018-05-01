function sleep(millisec){
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);
}


function start(res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello, start!');
    res.end();
    // return 'Hello, start!!';
}

function hello(res){
    // sleep(20000); // millisec, 20sec - blocking 
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('Hello, hello!');
    // res.end();
    // // return 'Hello, hello!!';
    
    setTimeout(function(){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello, hello!');
        res.end();        
    }, 20000); //call back
}

exports.start = start;
exports.hello = hello;