const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let sumInput = true;
let sum = 0;
rl.on("line", (chunk) => {
  if (sumInput) sum = Number(chunk);
  else {
    const nums = chunk.split(",").map((num) => Number(num));
    subsetSum(nums, sum);
  }
  sumInput = !sumInput;
});

/**
 * @param {number[]} nums
 * @param {number} targetSum
 * @return {number[]}
 */
function subsetSum(nums, targetSum) {
  const length = nums.length;
  const powerSet = [];
  for (const [index, value] of nums.entries()) {
    for (let i = index; i < length; i++) {
      let sum = 0;
      for (let j = i; j < length; j++) {
        sum += nums[i];
        if (sum === targetSum) {
          const subset = {
            start: index,
            end: j,
          };
          subsets.push(subset);
        }
      }
    }
  }
  subsets.forEach((subset) => console.log(nums.slice(subset.start, subset.end + 1)));
}
