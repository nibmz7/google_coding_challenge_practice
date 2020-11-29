const findKthLargest = (nums = [], k = 0) => {
  const count = {};

  for (const num of nums) {
    if(num < 0)
      count[num] = true;
      else {
        count[`a-${num}`] = true;
      }
    
  }

  console.log(count);
  // let result = null;

  // console.log(count);

  // count.reduceRight((prevValue, indexValue, index) => {
  //   const nextValue = prevValue + indexValue;
  //   if(result === null && nextValue >= k) result = index;
  //   return nextValue;
  // }, 0);

  // return result;
};

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,-7], 4));

