// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since when call is used for Function constructor themself new function instance creates
 * and then first argument(thisArg) should be ignored
 *
 * @section: 15.3, 10.2.3;
 * @path: 15_Native/15.3_Function_Objects/S15.3_A3_T3.js;
 * @description: First argument is this, and this don`t have needed variable;
 */

var f=Function.call(this, "return planet;");
var g=Function.call(this, "return color;");

//CHECK#1
try{
  f();
  $ERROR('#1: ');
} catch(e){
  if (!(e instanceof ReferenceError))
  	$ERROR('#1.1: ');
}   

var planet="mars";

//CHECK#2
if (f() !== "mars") {
  $ERROR('#2: ');
}

//CHECK#3
try{
  g();
  $ERROR('#3: ');
} catch(e){
  if (!(e instanceof ReferenceError))
  	$ERROR('#3.1: ');
}   

this.color="red";

//CHECK#4
if (g() !== "red") {
  $ERROR('#4: ');
}
