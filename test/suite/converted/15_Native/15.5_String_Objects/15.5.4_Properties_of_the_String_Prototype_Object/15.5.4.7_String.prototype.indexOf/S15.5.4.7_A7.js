// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf can't be used as constructor
 *
 * @section: 15.5.4.7, 13.2;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A7.js;
 * @description: Checking if creating the String.prototype.indexOf object fails;
 */

var __FACTORY = String.prototype.indexOf;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: var __FACTORY = String.prototype.indexOf; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: var __FACTORY = String.prototype.indexOf; "__instance = new __FACTORY" throw a TypeError. Actual: ' + (e));  
  }
  $PRINT(e);
}
