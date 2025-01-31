const score = 400
// console.log(score); // print 400

const balance = new Number(100) 
// console.log(balance); //print number = 100

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2).length); // print to ofter decimal digit . output => 100.00
// if .toFixed(3).length ; , output =>100.000

const otherNumber = 123.68795

// console.log(otherNumber.toPrecision);
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log( hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); 

 // .abs is absulate value. and print=> 4 
// it is convert negative value to positive value. 
// but not convert to positive value to negative value.

// console.log(Math.round(6.6)); // above .5 value, print => 1
// but below .5 value, print => 
 // console.log(Math.ceil(4.2)); // print upper value. ex => 5
// console.log(Math.floor(4.9)); // print blew value. ex =>4
// console.log(Math.min(4, 3, 6, 8)); // print minimum value.
// console.log(Math.max(4, 3, 6, 8));  // print maximum value.

console.log(Math.random());  // print random value that contiuous changable value.
// always print below 1 value
console.log((Math.random()*10) + 1); // follow BODMAS.
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)) + min); // importent

