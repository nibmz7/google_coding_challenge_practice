const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (chunk) => {
  processInput(chunk);
});

/**
 *
 * @param {string} data
 * @return {void}
 */
function processInput(data) {
  maxSubArray(data.split(",").map((num) => Number(num)));
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function maxSubArray(nums) {
  let prevMaxValue = nums[0];
  let min = 0;
  let max = 0;
  nums.shift();
  for (const [index, value] of nums.entries()) {
    if(index === 0) continue;
    if(max === (index - 1)) {
      const newMaxValue = prevMaxValue + value;
      if(newMaxValue > prevMaxValue && newMaxValue > value) {
        
      }
      if(value > newMaxValue) {
        prevMaxValue = value;
        min = index;
        max = index;
      } else if(newMaxValue > prevMaxValue) {
        prevMaxValue = newMaxValue;
        max = index;
      }
    } else {
      if(value >= prevMaxValue) {
        prevMaxValue = value;
        min = index;
        max = index;
      }
    }
  }
  console.log(nums.slice(min, max + 1));
}
