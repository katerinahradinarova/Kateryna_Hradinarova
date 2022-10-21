/*

Task №1
In this task you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example 
filter_list([1,2,'a','b']) == [1,2] 
filter_list([1,'a','b',0,15]) == [1,0,15] 
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

'use strict';

function filter_list(li) {
  return li.filter(el => typeof el === 'number');
}

// testing
console.log(filter_list([1,2,'a','b']));                // output: [ 1, 2 ]
console.log(filter_list([1,'a','b',0,15]));             // output: [ 1, 0, 15 ]
console.log(filter_list([1,2,'aasf','1','123',123]));   // output: [ 1, 2, 123 ]