/* JavaScript for WATS 3020 Sandwich Machine Assignment */

let breadOrder = prompt('What kind of bread would you like? (white, wheat or flat?)');

let meatOrder = prompt('What kind of meat would you like? (Separate multiple meats with a comma)');

let toppingsOrder = prompt('What toppings would you like? (Separate multiple toppings with a comma)');

let condimentsOrder = prompt('What condiments would you like? (separate multiple condiments with a comma)');


let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meatOrder.split(',');
let toppingArray = toppingsOrder.split(',');
let condimentArray = condimentsOrder.split(',');

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Condiments: ${condimentsOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
