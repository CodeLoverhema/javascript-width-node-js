//# Primitive

// 7 types : String, Number, Boolearn, Null, Undefine, Symbol,BigInt


const score = 100

const scoreValue = 100.55


const userlogin = false


const  outsaid = null

let userEmail 


const id = Symbol('hema')
const anotherid = Symbol('hema')



// console.log(id === anotherid)


const bigNumber = 45454545454544454n




//# Reference (Non Primitive)


//Array, Objects, Functions


const heros = ["salmankhan","amitabacchan","govinda"];


  let myojb = {
    name: "hema",
    age:25,

}

 const myFuntion = function(){
  // console.log("Hello world");
 }



 //use typeof /
//  console.log(typeof id);



 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

 //Stack (Primitive)copy, Heap(Non_Primitive)Refrence

 let myfirstname = "Hema" // stack (primitive)

 let anothername = "myfirstname"
 anothername = "HemaAlmora"

 console.log(myfirstname);
 console.log(anothername);



 //Heap(Non_pritive)
 let user1 = {
  email: "hema@12346gmail.com",
  upi: "user@jkh"

 }
 let user2 = user1
 user2.email = "hema9999@gmail.com"

 console.log(user1)
 console.log(user2)


