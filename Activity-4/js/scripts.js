// welcome message
var user ='Nikolai';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here is the latest freshpet reviews';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 14.99,
    memberDiscount = .10;
    memberPrice = price - (price * memberDiscount);
    priceEl = document.getElementById("price");
    memberPriceEl = document.getElementById("memberPrice");

    priceEl.textContent = price.toFixed(2);
    memberPriceEl.textContent = memberPrice.toFixed(2);
