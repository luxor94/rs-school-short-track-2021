/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let sum = 0;
    if (arr[i] == arr[i+1])
  }
}

module.exports = encodeLine;
