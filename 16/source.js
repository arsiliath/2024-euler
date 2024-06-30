'use strict';


let s = (2n ** 1000n).toString().split('');
let sum = s.reduce((a, v) => a + parseInt(v), 0);
console.log(sum);
// 1366