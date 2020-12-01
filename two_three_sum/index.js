console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const firstNumber = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNumber = nums[j];
      const sum = firstNumber + secondNumber;
      if (sum === target) return [i, j];
    }
  }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));

function threeSum(nums = []) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const firstNumber = nums[i];
    const prevFirstNumber = nums[i - 1];

    if (prevFirstNumber != null && prevFirstNumber === firstNumber) continue;
    if (firstNumber > 0) break;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const secondNumber = nums[leftPointer];
      const prevSecondNumber = nums[leftPointer - 1];

      if (leftPointer - 1 !== i && prevSecondNumber === secondNumber) {
        leftPointer++;
        continue;
      }

      const thirdNumber = nums[rightPointer];
      const sum = firstNumber + secondNumber + thirdNumber;

      if (sum < 0) leftPointer++;
      else if (sum > 0) rightPointer--;
      else {
        leftPointer++;
        rightPointer--;
        result.push([firstNumber, secondNumber, thirdNumber]);
      }
    }
  }

  return result;
}
