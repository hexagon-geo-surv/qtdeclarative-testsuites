// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Evaluate the production ArrayLiteral: [ Elision, AssignmentExpression ]
 *
 * @section: 11.1.4;
 * @path: 11_Expressions/11.1_Primary_Expressions/11.1.4_Array_Initialiser/S11.1.4_A1.4.js;
 * @description: Checking various properteis and content of the array defined with "var array = [,,,1,2]";
 */

var array = [,,,1,2];

//CHECK#1
if (typeof array !== "object") {
  $ERROR('#1: var array = [,,,1,2]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  $ERROR('#2: var array = [,,,1,2]; array instanceof Array === true');
}

//CHECK#3
if (array.toString !== Array.prototype.toString) {
  $ERROR('#3: var array = [,,,1,2]; array.toString === Array.prototype.toString. Actual: ' + (array.toString));
}

//CHECK#4
if (array.length !== 5) {
  $ERROR('#4: var array = [,,,1,2]; array.length === 5. Actual: ' + (array.length));
}

//CHECK#5
if (array[0] !== undefined) {
  $ERROR('#5: var array = [,,,1,2]; array[0] === undefined. Actual: ' + (array[0]));
}

//CHECK#6
if (array[1] !== undefined) {
  $ERROR('#6: var array = [,,,1,2]; array[1] === undefined. Actual: ' + (array[1]));
}

//CHECK#7
if (array[2] !== undefined) {
  $ERROR('#7: var array = [,,,1,2]; array[2] === undefined. Actual: ' + (array[2]));
}

//CHECK#8
if (array[3] !== 1) {
  $ERROR('#8: var array = [,,,1,2]; array[3] === 1. Actual: ' + (array[3]));
}

//CHECK#9
if (array[4] !== 2) {
  $ERROR('#9: var array = [,,,1,2]; array[4] === 2. Actual: ' + (array[4]));
}
