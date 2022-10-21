/*

There is an array of numbers - arr [1, 3, 6, 2, 2, 0, 4, 5] 
there is a number target = 5.
Count the number of pairs in the array, the sum of which will give target

*/

'use strict';

function fun(arr, target) {
    let result = 0;
    arr.sort();

    let i = 0;
    let j = arr.length - 1;
 
    while (i < j) {
      if (arr[i] + arr[j] === target) {
        while (i < j && arr[i] === arr[i + 1]) {
          i++;
        }

        while (i < j && arr[j] === arr[j - 1]) {
          j--;
        }
        
        result++;
        i++;
        j--;

      } else if (arr[i] + arr[j] < target) {
        i++;
      } else {
        j--;
      }
    }

  return result;
}

// testing
const numbers = [1, 3, 6, 2, 2, 0, 4, 5];
const target = 5;
console.log(fun(numbers, target));         // output: 3