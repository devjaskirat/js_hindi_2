const score = 400
console.log(score);

const balance  = new Number(100)// specially casted to a number
console.log(balance);

console.log(balance.toString().length);// shoee the answer 3 
console.log(balance.toFixed(1));// will show the 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));// 23.9 is the ouput


const hundreds = 1000000
console.log(hundreds.toLocaleString());

// +++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++//
console.log(Math);//it is an object in itself
console.log(Math.abs(-4));// will turn into the positive value 
// only turn the neg value to the pos value 
console.log(Math.round(4.3));
// round off to the 4 
// to decide the upper aur the bottom value 

// we have the two functions ceil and the floor
console.log(Math.floor(4.9));// return the integer 4

console.log(Math.random());
// it always return the value form 0 to the  1
console.log(Math.random()*10) +1);// this will shift the value to the one next place 

const min  = 10;
const max =20;
console.log(Math.floor(Math.random() *(max-min +1))+ min)
// learn this formula 

                       













