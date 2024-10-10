
function sayMyName()
{
console.log("j")
console.log("a")
console.log("s")
console.log("k")
}

// sayMyName()

// function addNumbers(number1,number2)// here are the parameters
// {

//     console.log(number1+number2);
// }
function addNumbers(number1,number2)// here are the parameters
{

   let result =number1+number2;
   return result;
   console.log("jaskirat");
}
const result = addNumbers(5,5)// here are the arguements 

// console.log(result) // undefined

// console.log("result is", result);

// in js ,dont define the return type of the function and the 
// data type of the parameters

function loginUserMessage(username = "sam")
{
  if(username===undefined) {
console.log(" please enter the username");
   return 
  }
  return `${username} just logged in `
}
// console.log(loginUserMessage("jaskirat"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,val3,...num1)
{
  return num1;
}
console.log(calculateCartPrice(200,400,500,2000,300))
// use the rest operator 
// ... is used as the rest and also the spread operator 
const user = {
  username: "jaskirat",
  price: 200
}
function handleObject(anyObject)
{
  console.log(`username is: ${anyObject.username} and the price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
username: "jaskirat singh",
price: 300
})

const myNeArray = [200,400,100,600]
function returnsecondvalue(getArray)
{
   return getArray[1];
}

// console.log(returnsecondvalue(myNeArray));
console.log(returnsecondvalue([200,400,500,300]))
