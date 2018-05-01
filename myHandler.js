const queryString = require('querystring');

const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);
}

// function start(res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello, start!');
//     res.end();
//     // return 'Hello, start!!';
// }

// function hello(res) {
//     // sleep(20000); // millisec, 20sec - blocking 
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write('Hello, hello!');
//     // res.end();
//     // // return 'Hello, hello!!';

//     setTimeout(function () {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('Hello, hello!');
//         res.end();
//     }, 20000); //call back
// }

function start(res) {
    console.log('Request handler \'start\'');
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        // '이름과 별명을 입력하세요.<br>' +
        '내용을 입력하세요.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        // '<input type="text" name="myNick" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function execute(input) {
    let result = myBrain.getResult(trainedNet, input);
    let output = result.trump > result.kardashian ? 'Trump' : 'Kardashian';
    console.log('trump = ' + Math.round(result.trump * 100) + '%, kardashian = ' + Math.round(result.kardashian * 100) + '%');
    let buffer = ('trump = ' + Math.round(result.trump * 100) + '%, kardashian = ' + Math.round(result.kardashian * 100) + '%');
    return buffer;
}

function hello(res, postData) {
    console.log('Request handler \'hello\'');
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '내용 : ' + queryString.parse(postData).myName +
        // '(별명: ' + queryString.parse(postData).myNick + ')님!' +
        '<br>사람 : ' + execute(postData) + //postData 날려서 결과값 통으로 returen 받도록 설계
        '</body>' + '</html>';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);

    res.end();
}

exports.start = start;
exports.hello = hello;