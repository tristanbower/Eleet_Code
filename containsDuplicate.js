//Easy diff
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp = [];
  for (i = 0; i < nums.length; i++) {
    if (!temp.includes(nums[i])) {
      temp.push(nums[i]);
    } else if (temp.includes(nums[i])) {
      return true;
    }
  }
  return false;
};

boolean = containsDuplicate([1, 2, 3, 4, 1]);
console.log(boolean);

//Optimal solution
//Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
var containsDuplicate1 = function (nums) {
  const set = new Set([...nums]);
  return set.size != nums.length;
};

//Optimal solution 2
var containsDuplicate2 = function (nums) {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashTable.has(nums[i])) return true;
    else hashTable.set(nums[i], true);
  }
  return false;
};

//We first itarate over the array of numbers. If the map alreadt has the value then we return true. We check this with the '.has' property of maps. Otherwise we add it to the maps and move on.
