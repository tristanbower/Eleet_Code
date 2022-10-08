/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var intArr = x.toString().split("");
  const reverseNum = intArr.reverse();

  if (reverseNum.join("") == x) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

var isPalindrome1 = function (x) {
  return x == x.toString().split("").reverse().join("");
};

isPalindrome(10);
