console.log("client side JavaScript has loaded")


let go1 = document.getElementById('go');
let box = document.getElementById('box');
let submit1 = document.querySelector('form');
let p = document.getElementById('p');
console.log(submit1)
submit1.addEventListener('submit', (e) => {
    e.preventDefault();

let address = box.value;

    fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
         p.textContent=data.forecast
    })
    });
})
