const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name ="jaskirat"
tinderUser.isLoggedIn = true
// console.log(tinderUser);


const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userFullname:
        {
            firstname: "jaskirat",
            lastname: " singh"
        }
    }
}
// console.log(regularUser.fullname?.userFullname);
// here e add the question amrk to check is the regularuser.fullname exist or not 
// because if i do not use this , i have to apply the conditional loos
// jitni marji nesting kr sakte ho 

const obj1 = {1: " a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// display the object inside th object


// const obj3 = Object.assign({},obj1,obj2);

// here the {} act as the target and the obj1, obj2 act as the source 

// const obj3 = Object.assign(target,source); the actual original syntax
const Obj3 = {...obj1,  ...obj2}
 console.log(Obj3);

 const Users = [
  {
    id:1,
    email: "jsingh@google.com"
   
  }, 
  //  the comma separate the different objects in the array of the objects 
  {
  },
  {},
  {},
]
Users[1].email;
//  console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// DESTRUCTURING OF THE OBJECTS
const course = {
  coursename: " js in hindi",
  price:"999",
  courseInstructor:" jaskirat"
}
// course.courseInstructor => general accessing the data form the course object

// const {courseInstructor} = course 
// console.log(courseInstructor);

// another method 
const {courseInstructor: instructor}=  course;
console.log(instructor);


// const navbar = ({company}) => {

// }
// navbar(company = "jaskirat.pvt")


/******************************************************** */
                  /*  API  /*  */
                  // {
                  //   "name:":"jaskirat",
                  //   "coursename": " js ",
                  //   "price":" too expensive"
                  // }

// in the APi the keys are also taken as the in the form of the string 


// [
//   {

//   },
//   {

//   },

// ]
// another form of the api's in the form of the array of the objects 










