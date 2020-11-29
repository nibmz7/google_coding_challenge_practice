const twoSum = (nums, target) => {
    for(let i = 0; i <= nums.length; i++) {
        const firstNumber = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            const secondNumber = nums[j];
            const sum = firstNumber + secondNumber;
            if(sum === target) return [i, j];
        }
    }
};

console.log(twoSum([2,7,11,15], 9));