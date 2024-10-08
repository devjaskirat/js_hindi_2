const name = "jaskirat"
const repoCount = 50

// how to concatenate these two strings
// console.log(name+ repoCoount + "value");
// string interpolation 
console.log(`hello my name is ${name } and my repoCount is ${repoCount}`);
const gameName = new String('jaskirat')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length); // 8 will be the output 
console.log(gameName.toupperCase());// will convert into upper cases 
// in this case , alse the upper value will not be changed 
console.log(gameName.charAt(2))// will show the char at the given index 
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)// will show the char upto the n-1 index like 
// in this case it is shown upto only 3 no of characters 
console.log( newString);
const anotherstring = gameName.slice(-8,4)// we can also add the negvalue in the slice 
console.log(anotherstring);

// it reads from the back of the string 
const newStringOne = " jaskirat   " 
console.log(newStringOne.trim())// this will rmeove the extra spaces like the starting ans the end spaces 
const url = "https://jaskirat.com/jaskirat%20singh"
console.log(url.replace('%20','_'))
// https://jaksirat.com/jaskirat_singh this is the output 
console.log(url.includes('jaskirat'))// will return the boolean output 
console.log(gameName.split('-'))

// explore the other functions also like the blink , bold and read documentation


// we need the two things (seperator,limit)









