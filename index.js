const carsElem = document.querySelector(".carsDisplay");
const colorD = document.querySelector(".colorDisplay");
const makeD = document.querySelector(".brandDisplay");
const makeElem = document.querySelector(".make");
const colorElem = document.querySelector(".color");
const btnElem = document.querySelector(".btn");
const availableCars = document.querySelector(".availCars");

const templateForFilter = Handlebars.compile(availableCars.innerHTML)

let filteredCars = [];



btnElem.addEventListener('click', function () {
    let makeValue = makeElem.value;
    let colorValue = colorElem.value;
    axios
        .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makeValue + "/color/" + colorValue)
        .then(results => results.data)
        .then(function (cars) {
console.log(cars)
carsElem.innerHTML = ""
            cars.forEach(function (car) {
                const li = document.createElement("tr");
                li.innerHTML = `
            <td>${car.make} <strong></td>
            <td>${car.model}</td>
            <td> ${car.color} </td>
            <td>${car.price}</strong></td>
            <td> <small>${car.reg_number}</small> </td>
            </tr>`
                carsElem.appendChild(li)
            })
        });
});


axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (cars) {
        console.log(cars.data);

        cars.data.forEach(element => {
            const li = document.createElement("tr");
            li.innerHTML = `
    <td>${element.make} <strong></td>
    <td>${element.model}</td>
    <td> ${element.color} </td>
    <td>${element.price}</strong></td>
    <td> <small>${element.reg_number}</small> </td>
`
            carsElem.appendChild(li)
        })
    });
// makes
axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (makes) {
        console.log(makes.data);

        makes.data.forEach(element => {
            const li = document.createElement("ul");
            li.innerHTML = `<li>${element}</li> `
            makeD.appendChild(li)
        });
    });

// colors
axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (colors) {
        console.log(colors.data);

        colors.data.forEach(color => {
            const li = document.createElement("ul");
            li.innerHTML = `
    <li>${color}</li> 
`
            colorD.appendChild(li)
        });
    });



