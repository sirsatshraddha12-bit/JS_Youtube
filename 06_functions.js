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
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
console.log(loginUserMessage());            //plz enter a username
                                              //undefined
