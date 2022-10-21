/*

Task №6
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.

Examples:

nextBigger(num: 12)    // returns 21
nextBigger(num : 513)  //  returns 531 
nextBigger(num : 2017  //  returns 2071




If the digits can't be rearranged to form a bigger number, return -1

 9  =>  -1
111 =>  -1
531 =>  -1

*/

'use strict';

function nextBigger(n){
  let x = +String(n).split('').sort((a, b) => b - a).join('');
  
  for (let i = n + 1; i <= x; i++) {
     if (x === +String(i).split('').sort((a,b) => b - a).join('')) {
       return i;
     }
  }

 return -1;
}

// testing 
console.log(nextBigger(12));       // output: 21
console.log(nextBigger(513));      // output: 531
console.log(nextBigger(2017));     // output: 2071
console.log(nextBigger(9));        // output: -1
console.log(nextBigger(111));      // output: -1
console.log(nextBigger(531));      // output: -1
