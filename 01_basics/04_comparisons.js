// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); not equal to

console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// avoid above all comparisons / always used clean code

// the reason is that an equality check == and comparisions > < >= <= work differently
// comparisons convert null to a number, treating as 0
// that's why null >= 0 is true and null > 0 is false

console.log(undefined >= 0);

// value will be false 
// comparision >= and equality check ==

// === strick check / it check the datatype and gives answer where == not check 

console.log("2" === 2);

