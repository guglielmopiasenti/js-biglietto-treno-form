// Getting the input and button elements from the DOM

const userName = document.getElementById('name');
const travelKm = document.getElementById('km');
const age = document.getElementById('age');
const generate = document.getElementById('generate');
const deleteBtn = document.getElementById('delete'); 



// Creating train ticket calculator



// I create an event listener for the button

generate.addEventListener("click", function() {
    const writtenName = userName.value.trim();
    console.log('Il nome è:' + writtenName);
    const kmToTravel = parseFloat(travelKm.value);
    console.log('Il kilometraggio selezionato è:' + kmToTravel);
    const selectedAge = parseFloat(age.value);
    console.log('slected age is: ' + selectedAge);
    
    // Declaration of the cost per km variable
    const costPerKm = 0.21;
    const totalKmCost = costPerKm * kmToTravel;
    console.log("This is the total cost " + (totalKmCost));
    let ticketPrice = totalKmCost;
    
    // Inserting age variable for discount calculation
    
    let discount = null;
    
    if (selectedAge < 18) {
        discount = 20;
    } else if (selectedAge >= 65) {
        discount = 40;
    }
    console.log(discount);
    
    if (discount) {
        // calculate discount amount
        ticketPrice -= (ticketPrice / 100) * discount;
    }
    console.log('Your ticket price is: ' + ticketPrice);

    // Connecting the form and button
    
})
