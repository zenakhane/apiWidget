const carsElem = document.querySelector(".carsDisplay")

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


}); 