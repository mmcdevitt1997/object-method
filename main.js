// const allCars = [
//     {
//         model: "Mustang",
//         color: "Midnight Blue",
//         year: 1976,
//         length: 120,
//         width: 62,
//         height: 47
//     },
//     {
//         model: "Xterra",
//         color: "Forest Green",
//         year: 2011,
//         length: 144,
//         width: 71,
//         height: 55
//     },
//     {
//         model: "Thunderbird",
//         color: "Red",
//         year: 2005,
//         length: 115,
//         width: 58,
//         height: 42
//     },
//     {
//         model: "Suburban",
//         color: "Grey",
//         year: 2015,
//         length: 149,
//         width: 73,
//         height: 58
//     }
// ]

const outputElement = document.querySelector("#app")

// // Iterate the array of cars. Individual objects stored in `car`.
// allCars.forEach(car => {

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//       outputElement.innerHTML += `<div>${value}</div>`
//     }
// })


const allBill = [
    {
        officeName: "Office Name",
        streetAddress:"address",
        doctorName: "billy", 
        patientName:"Matthew",
        visitDate:"03/21/19",
        amountBilled: 200,
        dueDate:"04/21/19"
    }
]
const dateVisited = allBill[0].visitDate
const owed = allBill[0].amountBilled
const patient = allBill[0].patientName

allBill.forEach(bill=> {
    for (const value of Object.values(bill)){
        outputElement.innerHTML += `<div>${value}</div>`
    } 
});

allBill.forEach(bill=> {
    for (const value of Object.keys(bill)){
        outputElement.innerHTML += `<div>${value}</div>`
    } 
});


console.log(allBill)
console.log(dateVisited , owed, patient)