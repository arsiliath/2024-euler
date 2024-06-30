'use strict';


const factorial = (n) => {
    let product = 1;
    while(n > 0) {
        product *= n;
        n--;
    }
    return product;
}

const paths = (side) => {
    return factorial(side * 2) / (factorial(side)**2);
}


console.log(paths(2))
console.log(paths(20))