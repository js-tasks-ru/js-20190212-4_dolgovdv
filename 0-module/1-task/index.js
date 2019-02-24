/**
 * Power.
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum(m, n) {
  if (Number.isNaN(parseFloat(m)) || Number.isNaN(parseFloat(n)) || !Number.isFinite(m) || !Number.isFinite(n)) {
    return ('Error: not numeric.');
  }
  return (m + n);
}
sum(3, 2);
