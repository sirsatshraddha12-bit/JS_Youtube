//Array

const myArr=[0,1,2,3,4,5]
const myHeros=["Shaktiman","Superman"]
const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);

//methods

myArr.push(6)           //add6
myArr.pop(6)                 //delete 6
myArr.unshift(9)          //90123456
myArr.shift()     //1,2,3,4,5

console.log(myArr.includes(9));        //true

console.log(myArr.indexOf(9));       //1

const newArr=myArr.join()
console.log(newArr); // "9,0,1,2,3,4,5"

console.log(myArr); // [9, 0, 1, 2, 3, 4, 5]


//slice.splice

console.log("A",myarr);                //A [0,1,2,3,4,5]
const myn1=myArr.slice(1,3)           
console.log(myn1);                      //[1,2]
console.log("B",myArr);                 //B [ 0, 1, 2, 3, 4, 5]

const myn2=myArr.splice(1,3)
console.log("C",myArr);           //C[0,4,5]
console.log(myn2);                  //[1,2,3]
