// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    "full name": "Rahul S Sherigar",
    [mySym]: "mykey1",
    age: 23,
    location: "Udupi",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rahul@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function () {
    console.log("Hello JS user");
    
}

JsUser.greetingsTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());



