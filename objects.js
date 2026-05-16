//singleton

//object literal

const mySym=Symbol("key1");

const JsUser={
    name: "John",
    [mySym]
    full name:"shraddha Sirsat"
    age:18,
    email:"hitesh@google.com,
    isLoggedIn:false,
    LastLoginDays:["Monday","Tuesday","Wednesday"],
}
console.log(JsUser);
console.log(JsUser["name"]);          //John
console.log(JsUser[mySym]);          //undefined


JsUser.email="shraddha12@chatgpt.com"
Object.freeze(JsUser)          //freeze the object
JsUser.email="shraddha12@microsoft.com"

console.log(JsUser);

JsUser.greeting=function(){
    console.log('Hello JsUser, $(this.name)');
}
console.log(JsUser.greeting());         //Hello JsUser

