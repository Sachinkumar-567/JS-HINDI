//  primitive datatype

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
 const anoterId = Symbol('123')

// console.log(id=== anotherId);

const bigNumber =33334566n


// reference (Non primitive datatype)

// Array, Object, Functions

const heros =["shaktiman", "nagraj", "doga"];
let myObj={
name:"sachin",
age:22,

}
const myFunction =function() {
 console.log("hello world");
}

// console.log(typeof  id );
// console.log(typeof  anotherId );

// .......Type of Operator Result ..............

// type of val                    result

// Undefined                       "undefined"
// Null                             "object"
// Boolean                          "boolean"
// Number                            "number"
// String                            "strig"


// study for link
// https://tc39.es/ecma262/#sec-typeof-operator
 


// **************************************************************
// stack memory(primitive), heap memory(non-primitive)

let myyoutubename = "gsachinkumar764@mail.com"

let anothername = myyoutubename
anothername = "chaiaurcode"

// console.log(anothername);
// console.log(myyoutubename);

let userOne ={
 Name:"sachinkumar.gov.in",
 email:"gsachinkumar764@gmai.com",
 upi:"9935766085@ybl"

}
let userTwo = userOne
userTwo.email ="sheetlaprasad369@gmil.com"
// console.log(userOne.email);
// console.log(userTwo.email);


