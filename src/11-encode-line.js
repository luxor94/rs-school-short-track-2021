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
  let result = '';
  let i = 0;
  let j = 1;

  while (i < str.length) {
    for (j = 1; str[i] === str[i + j]; j++) {
      j += 0;
    }
    if (j === 1) {
      result += str[i];
      i += j;
    } else {
      result += j + str[i];
      i += j;
    }
  }

  return result;
}
module.exports = encodeLine;
