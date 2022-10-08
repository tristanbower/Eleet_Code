/**
 * @param {string} s
 * @return {number}
 */

const romanIndex = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "I" && s[i + 1] == "V") {
      total += 4;
      i++;
    } else if (s[i] == "I" && s[i + 1] == "X") {
      total += 9;
      i++;
    } else if (s[i] == "X" && s[i + 1] == "L") {
      total += 40;
      i++;
    } else if (s[i] == "X" && s[i + 1] == "C") {
      total += 90;
      i++;
    } else if (s[i] == "C" && s[i + 1] == "D") {
      total += 400;
      i++;
    } else if (s[i] == "C" && s[i + 1] == "M") {
      total += 900;
      i++;
    } else {
      total += romanIndex[s[i]];
    }
  }
  return total;
};

romanToInt("MCMXCIV");
