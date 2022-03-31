const carsElem = document.querySelector(".carsDisplay");
const makeElem = document.querySelector(".model");
const colorElem = document.querySelector(".color");
const btnElem = document.querySelector(".btn");

axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(function(cars){
console.log(cars.data);

cars.data.forEach(element => {
    const li = document.createElement("tr");
    li.innerHTML = `
    <td>${element.make} <strong></td>
    <td>${element.model}</strong></td>
    <td> <small>${element.color}</small> </td>
`
    carsElem.appendChild(li)
});

const filterFunc = () => {
let carColor = {};
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(carColor.colorElem == carColor.makeElem){
        element.push(carColor)
    }
    
}
}


}); 
