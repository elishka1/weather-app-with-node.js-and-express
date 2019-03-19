

console.log("client side JavaScript has loaded")


let go1 = document.getElementById('go');
let box = document.getElementById('box');

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2')



go1.addEventListener('click', (e) => {
    e.preventDefault();

let address = box.value;

p1.textContent = "Loading..."
p2.textContent = "";


    fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {

        if (data.error) {
            p1.textContent = data.error
        } else {
            p1.textContent=data.location
            p2.textContent = data.forecast
        }
    })
    });
})
