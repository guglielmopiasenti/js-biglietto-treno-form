// Getting the input and button elements from the DOM

const userName = document.getElementById('name');
const travelKm = document.getElementById('km');
const age = document.getElementById('age');
const generateBtn = document.getElementById('generate');
const deleteBtn = document.getElementById('delete'); 


// Creating train ticket calculator

// Targeting DOM element

const p = document.getElementById("target");
console.log(target);


// Declaration of the cost per km variable

const costPerKm = 0.21;
const totalKmCost = costPerKm * travelKm;
console.log("This is the total cost " + (totalKmCost));
let ticketPrice = totalKmCost;

// Inserting age variable for discount calculation

let discount = null;

if (age < 18) {
    discount = 20;
} else if (age >= 65) {
    discount = 40;
}
console.log(discount);

if (discount) {
    // I get the discount element
    const discountElement = document.getElementById('discount-message');

    // I prepare the discount message
    const discountMessage = `Hai ricevuto uno sconto del <strong>${discount}%</strong`;

    // I insert the text into the element
    discountElement.innerHTML = discountMessage;

    // calculate discount amount
    ticketPrice -= (ticketPrice / 100) * discount;
}

// I insert the price into the element
target.innerText = "Il prezzo del biglietto è di: " + (ticketPrice.toFixed(2)) + "€";

if (discount) {
    target.innerHTML += `<small>(<del>€${totalKmCost}</del>)</small>`;
}