console.log('JS OK')

// Creating train ticket calculator

// Targeting DOM element

const p = document.getElementById("target");
console.log(target);

// Asking km 

const travelKm = parseInt(prompt ('Enter how many km to travel', '20'));
console.log("This are your selected km " + (travelKm));

// Declaration of the cost per km variable

const costPerKm = 0.21;
const totalKmCost = costPerKm * travelKm;
console.log("This is the total cost " + (totalKmCost));
let ticketPrice = totalKmCost;

// Asking user's age

const age = parseInt(prompt ('Enter your age', '25'));
console.log(age);


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