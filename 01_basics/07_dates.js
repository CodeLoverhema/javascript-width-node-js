// Dates 


let todayDate = new Date()
// console.log(todayDate)
// console.log(todayDate.toString())
// console.log(todayDate.toDateString())
// console.log(todayDate.toISOString())
// console.log(todayDate.toLocaleDateString())
// console.log(todayDate.toJSON())
// console.log(todayDate.toLocaleTimeString())
// console.log(todayDate.toUTCString())



// let todayCreateDate = new Date(2024, 6, 10)
// let todayCreateDate = new Date(2024, 6, 10, 12,6 )
let todayCreateDate = new Date("2024-05-18" )

// console.log(todayCreateDate.toDateString())
// console.log(todayCreateDate.toLocaleString())



let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(todayCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000));

    

let newDateToday = new Date()
// console.log(newDateToday);
// console.log(newDateToday.getMonth() + 1);
// console.log(newDateToday.getFullYear());

// it's not clear me  reapied again
`${newDateToday.getDay()}  and the time`



newDateToday.toLocalString('default',{
    weekday: "long",
})


