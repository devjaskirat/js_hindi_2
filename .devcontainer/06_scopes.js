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
// user.collectingMessage()
// user.username = "hnji"
// user.collectingMessage();
// this refers to the current context 
// console.log(this);
// this stores the address of the current object

// function chai()
// {
//   console.log(this);
// }

// chai()

// const chai = function()
// {
//   let username = "jaskirat"
//   console.log(this.username)
// }

// const chai = () =>
// {
//   let username = "jaskirat"
//   console.log(this)
// }


// chai()

// this simply defines the arro function


 const addThird = (num1,num2,num3) =>  (num1+num2+num3)// this is the implicit return
 // this defines the => operator 
// if there is a curly braces use the return or 
// else no need 

console.log(addThird(1,1,1))
