"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClosestToZero_1 = require("./ClosestToZero");
console.log(ClosestToZero_1.closestToZero([8, 5, 10])); // => 5
console.log(ClosestToZero_1.closestToZero([5, 4, -9, 6, -10, -1, 8])); // => -1
console.log(ClosestToZero_1.closestToZero([8, 2, 3, -2])); // => 2
console.log(ClosestToZero_1.closestToZero([2, 0])); // => 0
console.log(ClosestToZero_1.closestToZero([])); // => 0
console.log(ClosestToZero_1.closestToZero(undefined)); // => 0
