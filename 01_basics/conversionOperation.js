let score = "33bs";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" -> 33
// "33bcs" -> NaN
// true -> 1; false -> 0;


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 -> true; 0 -> false
// " " -> false
// "abhi" -> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);