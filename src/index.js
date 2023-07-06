'use strict';
//================================
// function euclidAlgo(a, b) {
//   while (a !== b) {
//     if (a > b) {
//       a = a - b;
//     } else {
//       b = b - a;
//     }
//   }
//   return a
// }
// console.log(euclidAlgo(120, 80));
//================================
function euclidAlgo(a, b) {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
}
console.log(euclidAlgo(50, 80));

