/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function (arr) {
  let newArr = [];
  for (const nums of arr) {
    if (nums % 2 === 1) {
      newArr.push(nums);
    }
  } return newArr;

}


/*-----*/
const onlyEvens = function (arr) {
  let newArr = [];
  for (const nums of arr) {
    if (nums % 2 === 0) {
      newArr.push(nums);
    }
  } return newArr;
}


/*-----*/
const shortNamesOnly = function (arr) {
  let shortNames = [];
  for (const names of arr) {
    if (names.length < 7) {
      shortNames.push(names);

    }

  }
  return shortNames;
}


/*-----*/

const dNames = function (pimps) {
  let pimpsOnly = [];
  for (const pimp of pimps) {
    if (pimp.startsWith('D')) {
      pimpsOnly.push(pimp)
    }

  } return pimpsOnly
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
