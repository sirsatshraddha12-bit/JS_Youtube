//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn  = false

//console.log(tinderUser);            //

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shraddha",
            lastname: "sirsat"
        }
    } 

}
//console.log(regularUser.fullname.userfullname.firstname);     //shraddha

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

const obj3 = Object.assign(obj1,obj2)

//console.log(obj3);        // {1: "a", 2: "b", 3: "a", 4: "b"}

const users = [
    {
        id: 1,
        email: "hp@gmail.com"
    },

     {
        id: 1,
        email: "hp@gmail.com"
    },

     {
        id: 1,
        email: "hp@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));        //["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser));          //["123abc", "Sammy", false]
console.log(Object.entries(tinderUser));               //[["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

console.log(tinderUser.hasOwnProperty("name"));        //true




//lec 2nd

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shraddha"
}
//courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);        //shraddha

const navbar = {company}; {

}

navbar(company = "shraddha");

//API

{
    name: "shraddha";
    course: "js in hindi";
    price: 999
};

