// var c = 300;
let a = 300;
 if(true)
  {
    let a = 10
    // const b = 20;
console.log("inner :",a)
 
}
// console.log(a)
// console.log(b)
// console.log(a)


// function One ()
// {
//   const username = "jaskirat";

//   function Third()
//   {
//  const site = "youtube"
//  console.log(username);
//   }
//   // console.log(site)
//   // Third()
// }
// One()

if(true)
{
  const username = "jaskirat"
  if(username==="jaskirat")
  {
    const site= " youtube"
    console.log(username+ site);
  }
  // console.log(site)
}
// console.log(username)
// dom => document object model 
// +++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5))
function addOne(num)
{
return num+1;
}


console.log(addThird(5))// this display the errors because it is stored int he variable 
const addThird = function(num)
{
  return num+2;
}
