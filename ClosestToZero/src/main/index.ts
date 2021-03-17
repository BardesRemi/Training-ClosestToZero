import {closestToZero} from "./ClosestToZero";

console.log(closestToZero([8, 5, 10])); // => 5
console.log(closestToZero([5, 4, -9, 6, -10, -1, 8])); // => -1
console.log(closestToZero([8, 2, 3, -2])); // => 2
console.log(closestToZero([2, 0])); // => 0
console.log(closestToZero([])); // => 0
console.log(closestToZero(undefined)); // => 0