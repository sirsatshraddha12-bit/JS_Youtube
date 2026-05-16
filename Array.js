const marvel_heroes=["thor","Ironman","Spiderman"]
const marvel_heroes=["Superman","Flash","Batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);                  //["thor","Ironman","Spiderman",["Superman","Flash","Batman"]]
console.log(marvel_heros[3][1]);           //flash

const allheros=marvel_heros.concat(dc_heros)       //["thor","Ironman","Spiderman","Superman","Flash","Batman"]
console.log(allheros);                  //["thor","Ironman","Spiderman","Superman","Flash","Batman"]

const all_new_heros=[...marvel_heros, ...dc_heros]
console.log(all_new_heros);              //["thor","Ironman","Spiderman","Superman","Flash","Batman"]

const another_array=[1,2,3,[4,5,6]7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);          //[1,2,3,4,5,6,7,6,7,4,5]

