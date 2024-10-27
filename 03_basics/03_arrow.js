const user = {
    username: "rahul",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "rahul"
//     console.log(this.username);
                    
// }

// one()


// const one = function () {
//     let username = "rahul"
//     console.log(this.username);
// }

// one()

const one =  () => {
    let username = "rahul"
    console.log(this);
}

// one()


// const addTwo =(num1, num2) =>  num1 + num2

// const addTwo =(num1, num2) => (num1 + num2)

const addTwo =(num1, num2) => ({username: "rahul"})

console.log(addTwo(3,4));


