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
console.log("This is the total km cost " + (totalKmCost));

// Asking user's age

const age = parseInt(prompt ('Enter your age', '25'));
console.log(age);


// Inserting age variable for discount calculation

let discount = 1;

if (age <= 18) {
    discount = 0.8;
} else if (age >= 65) {
    discount = 0.6;
}
console.log(discount);


// calculating ticket price

const ticketPrice = totalKmCost * discount;
console.log("ticket price: " + (ticketPrice));
target.innerText = "Ticket price is: " + (ticketPrice.toFixed(2)) + "€";