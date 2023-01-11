// NAND --> !AND

/**
 * AND (&&)
 * -------
 * P Q | R
 * -------
 * T F | F
 * T T | T
 * F T | F
 * F F | F
 *
 * NAND
 * -------
 * P Q | !R
 * -------
 * T F | T
 * T T | F
 * F T | T
 * F F | T
 */

let P = true;
let Q = false;
let nand = !(P && Q);
console.log(nand);
