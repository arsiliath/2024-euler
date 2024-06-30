'use strict';
// a + b + c = 1000
// a^2 + b^2 = c^2
// a < b < c


// c <= 999, because a + b + c = 1000, and a < b < c
// a^2 + b^2 is a perfect square 
// c^2 <999^2


let a = 0, b = 0, c = 0;

// Solution 1
let found = false;
for (a = 0; a < 1000; a++) {
    for (b = a + 1; b < 1000; b++) {
        for (c = b + 1; c < 1000; c++) {
            if (a + b + c == 1000) {
                if (a ** 2 + b ** 2 == c ** 2) {
                    console.log(a, b, c)
                    console.log(a*b*c)
                    found = true;
                    break;
                }
            }
        }
        if (found) break;
    }
    if (found) break;
}

// Solution 2
for(a=0; a<1000; a++) {
    for(b=a+1; b<1000; b++) {
        c = 1000 - a - b;
        if(a**2 + b**2 == c **2 ) {
            console.log(a,b,c)
        }
    }
}


