let criminals = [
    {firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "S574555",
    adress: "U sloupů 16",
    city: "České Budějovice"
    },
    {firstName: "Jan",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "UN4574555",
    adress: "Malská 29",
    city: "České Budějovice"

    },
    {firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "EP7474588",
    adress: "Stevardská 38",
    city: "Pardubice"

    }
]
 
const inputText = document.querySelector("#input-text")
const results = document.querySelector("#results")
let typed = {
    search: ""
}

let sortCrim = function(criminals, typed){
    let array = criminals.filter(function(one){
        return one.licencePlate.toLowerCase().includes(typed.search.toLowerCase())
    })
    
    results.innerHTML = ""
    array.forEach(function(one){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `jam: ${one.firstName}`
        results.appendChild(paragraph)
    })
}

inputText.addEventListener("input", function(e){
    typed.search = e.target.value
    sortCrim(criminals, typed)
})































// let filters = {
//     searching: ""
// }

// let renderCrim = function(criminals, filters){
//     let arrayResult = criminals.filter(function(one){
//         return one.licencePlate.toLowerCase().includes(filters.searching.toLowerCase())
//     })
    
//     arrayResult.array.forEach(element => {
        
//     });
// }


// inputText.addEventListener("input", function(e){
//     filters.searching = e.target.value
//     renderCrim(criminals, filters)
// })














// let filters = {
//     searchText: ""
// }



// const renderCriminals = function(criminals, filters){
//     let arrayResult = criminals.filter(function(oneSuspect){
//         return oneSuspect.licencePlate.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     console.log(arrayResult);
    
//     document.querySelector("#id-criminals").innerHTML = ""

//     arrayResult.forEach(function(oneSuspect){
//         let paragraph = document.createElement("p")
//         paragraph.innerHTML = `Jméno: ${oneSuspect.firstName}  <br>Příjmení . ${oneSuspect.secondName}`
        
//         document.querySelector("#id-criminals").appendChild(paragraph)
        
//     })

// }


// let licencePlate = document.querySelector("#licence-plate")

// licencePlate.addEventListener("input", function(e){
//     filters.searchText = e.target.value;
//     renderCriminals(criminals, filters)
// })












// let filters = {
//     searchText: ""
// }

// const renderCriminals = function(ourCriminals, tryToFind){
//     let arrayResult = ourCriminals.filter(function(oneSuspect){
//         return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
//     })

//     console.log(arrayResult);
    
//     document.querySelector("#id-criminals").innerHTML = ""

//     arrayResult.forEach(function(oneSuspect){
//         let paragraph = document.createElement("p")
//         // paragraph.innerHTML = `Jméno: ${oneSuspect.firstName}  <br>Příjmení . ${oneSuspect.secondName}`
//         paragraph.innerHTML = oneSuspect
//         document.querySelector("#id-criminals").appendChild(paragraph)
        
//     })

// }


// let licencePlate = document.querySelector("#licence-plate")

// licencePlate.addEventListener("input", function(e){
//     filters.searchText = e.target.value;
//     renderCriminals(criminals, filters)
// })











































































