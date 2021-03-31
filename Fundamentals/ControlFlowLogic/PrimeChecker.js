'use strict';
function isPrimary(num) {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0){
            isPrime = false;
            break;
        }
    }
    isPrime === true && num > 1 ? console.log("true") : console.log("false");
}

isPrimary(8);