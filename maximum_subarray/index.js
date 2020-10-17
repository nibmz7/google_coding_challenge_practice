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
  let globalMax = { value: nums[0], start: 0, end: 0 };
  for (const [index, value] of nums.entries()) {
    let isCombined = true;
    let localMax = value + prevMaxValue;
    if (value > localMax) {
      localMax = value;
      isCombined = false;
    }
    if (localMax > globalMax.value) {
      globalMax.value = localMax;
      globalMax.end = index;
      if (!isCombined) globalMax.start = index;
    }
    prevMaxValue = localMax;
  }
  const subArray = nums.slice(globalMax.start, globalMax.end + 1);
  console.log({subArray, globalMax});
}
