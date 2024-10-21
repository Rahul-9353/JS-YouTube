// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 123445677889999966n



// Reference (Non primitive)

// Arrays, Objects, Functions


const heros = ["Thor", "Batman","Daredevil"];
let myObj = {
    name: "rahul",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
