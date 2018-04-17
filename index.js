// global.console.log("흑흑 오늘 밥은 맛있었다");
// console.log(console);
// console.log(typeof console === 'object');
// console.log('Node.js version : ' + process.version);
// console.log(process.memoryUsage());
// console.log(process.env);
// console.log(module);

// console.log('Hello, world!!');
const circle = require('./circle');

console.log('Area of a circle = ' + circle.area(3));
console.log('Circumference of a circle = ' + circle.circum(3));
console.log('PI = ' + circle.pi);