// Javascript console test
// console.log("Hello")


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// the function
function favoriteFoodDishes(person) {
    for (const key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}:`)
            person[key].forEach(item => {
                console.log(` -${item}`)
            })

        } else if (typeof person[key] == 'object') {
            console.log(`${key}:`)

            for (const subKey in person[key][0]) {
                console.log(` - ${subKey}: ${person[key][0][subKey]}`)
            }

        } else {
            console.log(`${key}: ${person[key]}`)
        }
    }
}

// Could not figure out how to get the shakes to display in that function
// another function for the shakes
function favShakes(shakes) {

    console.log("shakes:")
    shakes.forEach(shake => {
        for (const key in shake) {
            console.log(` - ${key}: ${shake[key]}`)
        }
    })
}




  
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
favoriteFoodDishes(person3)
favShakes(person3.shakes)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
// Use an arrow to create the printInfo method

    printInfo = () => {
        return `Name: ${this.name}, Age: ${this.age}`
    }


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = (years) => {
        this.age += years
    }
}

let kenai = new Person('Kenai', 38)
let mike = new Person ('Mike', 42)

// printing both people initially
console.log(kenai.printInfo())
console.log(mike.printInfo())

//increment a person by 3 years
mike.addAge(3)

//output increase in Mike's age
console.log(mike.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkWord(theword) {
    return new Promise((resolve, reject) => {
      if (theword.length > 10) {
        resolve(`The word ${theword.toUpperCase()} is a BIG WORD!`)
      } else {
        reject(`The word ${theword} is a small number`)
      }
    })
  }

  // testing to see if this prints out big word
  checkWord("alphabetsoup")

  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

  // testing to see if this prints small number
  checkWord("help")

  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
 
  
