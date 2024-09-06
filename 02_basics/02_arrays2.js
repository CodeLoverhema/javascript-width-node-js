const fav_fruats = ["Apple","Mango","Banana","Orenge","Papaya"];
const fav_color = ["Red","blue","Green","Yellow","Purpal","Pink"];

// console.log(fav_fruats);
// console.log(fav_color);


//first method use concat////

// const allfav = fav_fruats.concat(fav_color)
// console.log(allfav);


//secind method use sspread operator//
const all_fav = [...fav_fruats,...fav_color]

// console.log(all_fav);


const many_arrays = [1, 2, 5, 5, [9, 8, 6, 3, 2,], 2, [0, 9, 8, 3, ]]

const mix_many_arrays = many_arrays.flat(Infinity);

console.log(mix_many_arrays);




console.log(Array.isArray("Hema Arya"))
console.log(Array.from("Hema Arya"))
console.log(Array.from({name: "Hema Arya"})) // interesting qeution


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


