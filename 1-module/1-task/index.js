/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow(m, n) {
  if (Number.isNaN(parseFloat(m)) || Number.isNaN(parseFloat(n)) || !Number.isFinite(m) || !Number.isFinite(n)) {
    return ('Error: not numeric.');
  }
  if (n < 0) {
    return ('Error: not numeric.');
  }
  let a = 1;
  if (n === 0) {
    return a;
  }
  for (let i = 0; i < n; i += 1) {
    a *= m;
  }
  return a;
}
pow(2, 3);

