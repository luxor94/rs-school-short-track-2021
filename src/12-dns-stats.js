/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((el) => el.split('.').reverse().join('.')).join('.').split('.');
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        sum += 1;

        result[`.${arr[i]}`] = sum;
      }
    }
  }

  // const size = Object.keys(result).length;

  for (let i = 1; i < 3; i++) {
    result[`${Object.keys(result)[i]}${Object.keys(result)[i - 1]}`] = result[Object.keys(result)[i]];
    delete result[Object.keys(result)[i]];
    result[``] = result[Object.keys(result)[i]];
  }

  return result;
}

module.exports = getDNSStats;
