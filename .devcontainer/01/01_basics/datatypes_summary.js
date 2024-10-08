let myYoutubename = "jaskiratdev.com"
// stack is the primitive and heap is non 
let anotherName = myYoutubename
anotherName = " chaiaurcode"
console.log(anotherName); // shows the jaskiratdev
console.log(anotherName);// n shows the chai aur code
let user = {
  email:"user@google.com",
  upi:" user@ybl"
}
let usertwo = user; 
usertwo.email = "ramghariajskirat608@gmail.com"
console.log(user.email)
console.log(usertwo.email)
// when ever we pass something to the heap , the changes are made to the actual value 
// as we pass with the reference and in heap we pass only the non premitive memory 
// while in the stack memory , we pass the every primitve data by passing theri value and the changes 
//  are made to their copy , not to the original value 
