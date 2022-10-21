/*

Task №3

Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples:
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2

*/

'use strict';

function digital_root(n) {
  if (n < 10) {
    return n;
  }

  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}


// testing
console.log(digital_root(16));        // output: 7
console.log(digital_root(942));       // output: 6
console.log(digital_root(132189));    // output: 6
console.log(digital_root(493193));    // output: 2