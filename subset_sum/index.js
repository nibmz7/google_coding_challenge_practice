class Node {
  constructor(value, children, parent = { nums: [], sum: 0 }) {
    this.nums = [...parent.nums, value];
    this.children = children;
    this.value = value;
    this.sum = value + parent.sum;
  }

  getChildNodes(targetSum) {
    const nodes = [];
    for (const [index, num] of this.children.entries()) {
      const nextSum = num + this.sum;
      if (nextSum <= targetSum) {
        const remaining = this.children.slice(index + 1);
        const node = new Node(num, remaining, this);
        nodes.push(node);
      }
    }
    return nodes;
  }
}

class Tree {
  constructor(nums) {
    const collection = [];
    for (const [index, num] of nums.entries()) {
      const node = new Node(num, nums.slice(index));
      collection.push(node);
    }
    this.collection = collection;
  }

  traverseDF(targetSum) {
    const collection = this.collection.slice();
    console.log(collection[0].children + " --- sum: " + targetSum);

    while (collection.length > 0) {
      const node = collection.shift();

      if (node.sum === targetSum) {
        console.log(node.nums);
      }
      collection.unshift(...node.getChildNodes(targetSum));
    }

    console.log("---------------");
  }
}

function subsetSum(nums, targetSum) {
  const tree = new Tree(nums);
  tree.traverseDF(targetSum);
}

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
