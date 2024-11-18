// let myName = "rahul    "

// console.log(myName.trueLength);

let myHeroes = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "smash",

    getHulkPower: function () {
        console.log(`Hulk power is ${this.hulk}`);
        
    }
}

Object.prototype.rahul = function () {
    console.log(`rahul is present in all objects`);
    
}

Array.prototype.heyRahul = function () {
    console.log(`Rahul says hello`);
    
}

// heroPower.rahul()
// myHeroes.rahul()
// myHeroes.heyRahul()
// heroPower.heyRahul()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"rahul".trueLength()
"iceTea".trueLength()