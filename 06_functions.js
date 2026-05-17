//functions

function sayMyName(){

console.log()
}
//sayMyName()


function addTwoNumbers(number1, number2) {
 //   console.log(number1 + number2)
}
addTwoNumbers(3 + 4)                    //7


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3 + 4)   
//console.log("Result", result)                //7


//2nd way


function loginUserMessage(username) {
    if(username === unndefined) {
       // console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
//console.log(loginUserMessage());            //plz enter a username
                                              //undefined just logged in


function calculateCartPrice(val1,val2...num1){
    return num1
}                                  
//console.log(calculateCartPrice(200,300,700,400));        //[700,400]         


const user = {
    username: "Shraddha",
    price: 999
}

function handleObject(anyobject) {
 //   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user);




//array

const myArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray) {
    return getArray[1]

}
console.log(returnSecondValue(myArray));        //2