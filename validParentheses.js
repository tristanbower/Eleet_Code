//Easy diff
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];
  for (i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    console.log(stack);
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

isValid("{[()]}");
