/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(name) {
  const names = name;
  const countNames = {};
  for (let i = 0; i < names.length; i++) {
    let sum = 0;
    for (let j = 0; j < names.length; j++) {
      if (names[j] === names[i]) {
        sum += 1;

        countNames[`${names[i]}`] = sum;
      }
    }
  }
  for (let i = 0; i < names.length; i++) {
    let a = 0;
    for (let j = 0; j < names.length; j++) {
      if (names[j] === Object.keys(countNames)[i]) {
        names[j] = `${names[j]}(${a})`;
        a++;
      }
    }
  }

  for (let i = 0; i < names.length; i++) {
    if (names[i].slice(-3) === '(0)') {
      names[i] = names[i].substr(0, names[i].length - 3);
    }
  }
  return names;
}

module.exports = renameFiles;
