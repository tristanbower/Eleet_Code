/**
 *Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Exmaple 2
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 */

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
