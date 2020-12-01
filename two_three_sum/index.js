// console.log(twoSum([2, 7, 11, 15], 9));

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

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
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

function threeSum(nums) {
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

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([-100, -98, -2, -1], -101));
// console.log(threeSumClosest([1, 1, 1, 1], 0));

function threeSumClosest(nums, target) {
  let closestSum;
  let closestDifference;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const firstNumber = nums[i];
    const prevFirstNumber = nums[i - 1];

    if (prevFirstNumber != null && prevFirstNumber === firstNumber) continue;
    if (closestDifference != null) {
      if (target > 0 && firstNumber > target) continue;
      if (target < 0 && firstNumber > 0) continue;
    }
    if (firstNumber > 0 && firstNumber > target && closestDifference != null)
      break;

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

      if (sum === target) return sum;

      if (sum < target) leftPointer++;
      else rightPointer--;

      const difference = Math.abs(target - sum);
      if (difference < closestDifference || closestDifference == null) {
        closestDifference = difference;
        closestSum = sum;
      }
    }
  }

  return closestSum;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));

function fourSum(nums, target) {
  const result = [];

  nums.sort((a, b) => a - b);

  const findThreeSum = (firstIndex) => {
    const firstNumber = nums[firstIndex];
    for (let i = firstIndex + 1; i < nums.length - 2; i++) {
      const secondNumber = nums[i];
      const prevSecondNumber = nums[i - 1];

      if (i - 1 !== firstIndex && prevSecondNumber === secondNumber) continue;
      if (target > 0 && firstNumber > target) continue;
      if (target < 0 && firstNumber > 0) continue;

      let leftPointer = i + 1;
      let rightPointer = nums.length - 1;

      while (leftPointer < rightPointer) {
        const thirdNumber = nums[leftPointer];
        const prevThirdNumber = nums[leftPointer - 1];

        if (leftPointer - 1 !== i && prevThirdNumber === thirdNumber) {
          leftPointer++;
          continue;
        }

        const fourthNumber = nums[rightPointer];
        const sum = firstNumber + secondNumber + thirdNumber + fourthNumber;

        if (sum < target) leftPointer++;
        else if (sum > target) rightPointer--;
        else {
          leftPointer++;
          rightPointer--;
          result.push([firstNumber, secondNumber, thirdNumber, fourthNumber]);
        }
      }
    }
  };

  for (let i = 0; i < nums.length - 3; i++) {
    const firstNumber = nums[i];
    const prevFirstNumber = nums[i - 1];

    if (prevFirstNumber != null && prevFirstNumber === firstNumber) continue;
    findThreeSum(i);
  }

  return result;
}
