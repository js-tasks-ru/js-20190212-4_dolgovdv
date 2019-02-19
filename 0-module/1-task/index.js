/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum (m, n) {
  if ( isNaN(parseFloat(m)) || isNaN(parseFloat(n)) || !isFinite(m) || !isFinite(n) ){
    return ('Error: not numeric.')
  }
  return (m + n)
}
