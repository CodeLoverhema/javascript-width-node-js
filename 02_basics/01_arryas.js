// array

const todayMyArr = [0,1,2,3,4,5]
const todayNews = ["Aajtak","ABP News"]

// console.log(todayMyArr)
// console.log(todayNews)

const todayMyArr2 = new Array (1,2,3,4,6);
// console.log(todayMyArr2)

const todayMyArr3 = new Array("hema","neetu","megha","maya");
// console.log(todayMyArr3[1])


// Array Methods //

// todayMyArr3.push(6)
// todayMyArr3.push(9)
// todayMyArr3.pop()

// todayMyArr3.unshift(6)
// todayMyArr3.shift(6)


// console.log(todayMyArr3.includes("hema"));
// console.log(todayMyArr3.indexOf("hema"));


// console.log(todayMyArr3);

const newArr = todayMyArr.join()

// console.log(todayMyArr)

// console.log(typeof newArr);

// ****//slice, splice//

console.log("A", todayMyArr);
const myn1 = todayMyArr.slice(1, 3);

console.log(myn1);

console.log("B", todayMyArr)



// console.log("B", todayMyArr);
const myn2 = todayMyArr.splice(1, 3);
console.log(myn2);
console.log("C", todayMyArr);