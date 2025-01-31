const name ="sachin"
const repoCount =50

// console.log(name+repoCount+ "Value");
// console.log('hello my name is ${name} and my repo count is ${repoCount}');    // error wrong output.

const gameName =new String('hitesh-hc')

// console.log(gameName);
// console.log( gameName.__proto__);

 
/* String {'hitesh'}
0:"h"
1: "i"
2: "t"
3: "e"
4: "s"
5: "h"
length: 6
[[Prototype]]: String
[[PrimitiveValue]:"hitesh" ; */

// console.log(gameName[0]); // h
// console.log( gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)  //oposite value.
console.log(anotherString);

const newStringOne = "  hitesh   "   // not word space print
console.log(newStringOne); 
console.log(newStringOne.trim()); // print with text space.


const url ="http://hiteh.com/%20chaodhary"
console.log(url.replace('com','gov.in'));  // replace in url.

console.log(url.includes('hitesh'));

console.log(gameName.split('-') );








