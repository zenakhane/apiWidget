// const makeElem = document.querySelector(".make");
// const colorElem = document.querySelector(".color");
// const btnElem = document.querySelector(".btn");
// reference handlebars 
// const availableCars = document.querySelector(".availCars");
// const templateForFilter = Handlebars.compile(availableCars.innerHTML)

// let filteredCars = [];



//     btnElem.addEventListener('click',function(){
//       let makeValue =  makeElem.value;
//        let colorValue = colorElem.value;
//         axios
//         .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makeValue + "/color/" + colorValue)
//         .then(results => results.data)
//         .then(function(cars){
        
//         cars.forEach( function (car) {
//             carsElem.innerHTML = ""
//             const li = document.createElement("tr");
//             li.innerHTML = `
//             <td>${car.make} <strong></td>
//             <td>${car.model}</td>
//             <td> ${car.color} </td>
//             <td>${car.price}</strong></td>
//             <td> <small>${car.reg_number}</small> </td>
//             </tr>`
//             carsElem.appendChild(li)
//         })
//         });
//     });
    