//Medium Diff
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max_ending = 0;
  var max_so_far = -Math.pow(2, 25);

  for (i = 0; i < nums.length; i++) {
    max_ending = max_ending + nums[i];
    if (max_so_far < max_ending) {
      max_so_far = max_ending;
    }
    if (max_ending < 0) {
      max_ending = 0;
    }
  }
  return max_so_far;
};

temp = maxSubArray([-1]);
console.log(temp);
