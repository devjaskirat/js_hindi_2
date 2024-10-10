// singleton
// object literals


// const mySym = symbol('key1')
Object.create// this is the constructor method or the 
const JsUser = {
  name:"jaskirat",// it will process the name also as the string 
  age: 18,

  // [mySym] :"mykey1",// not the way to access the symbol 
location:"amritsar",
email:"ramghariajaskirat608@gmail.com",
isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"]
}
console.log((JsUser.email))
console.log(jsuser["email"]) // here the email is being taken as the string in the back screen
// console.log(JsUser[mySym])
// Create a symbol
const mySym = Symbol('mykey1');

// Create an object with the symbol as a key
const JsUser = {
  [mySym]: 'valueForMyKey1'
};

// Access the value using the symbol
console.log(JsUser[mySym]);
jsUser.email = "jaskirat@chatgpt.com"
// Object.freeze(JsUser)
// with this we can not change the values in our objects 
jsUser.email = "jaskirat@microsoft.com"
console.log(JsUser);

jsUser.grreting = function()
  {
    console.log("hello js user" ); // prefer to use the tactics
  }
console.log(JsUser.greeting());// is not a function at the moment 
// this will return back the function //
// the reference of the function id returned back 
jsUser.grretingTwo = function()
  {
    console.log(`hello js user` ${}this.name); // prefer to use the tactics
  }

console.log(JsUser.greetingtwo());



