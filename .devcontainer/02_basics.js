// ARRAY 
const marvel_heroes = [" thor", "iron_man",  "spaider_man"]
const dc_heroes= ["superman","flash", "batman"]

// marvel_heroes.push(dc_heroes);
console.log(marvel_heroes)  ;
// this will show the array inside the array 
console.log(marvel_heroes[3][1])// will show the flash element int he third element
// and the array inside the array is taken as the third element 

const allHeroes marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
//the concat retunr the new array that why we have to store the new array 
const allHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes);
// this will spread our new array 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("jaskirat"))
console.log(Array.from("jaskirat"))// will convert the jaskirat into the array 
console.log(Array.from("singh"))
console.log(Array.from({name: "jaskirat"}));
 // interesting 
  let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.from((score2, score3 , score));
 // Array.of can be also there 
            

  








