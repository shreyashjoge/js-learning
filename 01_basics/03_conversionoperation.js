//Conversion

//let score = 33
let score = "456bh"


console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)                // NaN = not a number
console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan 
// true => 1; false => 0

let isLoggedIN = ""

let booleanIsLoggedIn = Boolean(isLoggedIN)
console.log(booleanIsLoggedIn)

// 1 => true: 0 => false
// "" => false
// "hitesh" => true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
