'use strict';


// Big int
{
    let s = (2n ** 1000n).toString().split('');
    let sum = s.reduce((a, v) => a + parseInt(v), 0);
    console.log(sum);
    // 1366
}


// Manual
{
    let array = [2];
    for (let i = 1; i < 1000; i++) {
        let carry = 0;
        for (let j = array.length - 1; j > -1; j--) {

            // Multiply by 2
            let number = array[j] * 2;

            // Add the carry from the right
            number += carry;
            carry = 0; // reset it 

            // Break into digits
            let digits = (number + "").split("");

            // Assign the ones digit to the jth index
            array[j] = parseInt(digits.pop());

            // Assign remaining digit to carry
            if (digits.length) carry += parseInt(digits[0]);

        }
        if (carry) array.unshift(carry);
    }
    let sum = array.reduce((a, v) => a + parseInt(v), 0);
    console.log(sum);
}