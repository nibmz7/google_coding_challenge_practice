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

class Node {
  constructor(digit, parents, children) {
    this.digit = digit;
    this.parents = parents;
    this.children = children;
  }

  getChildNodes(sum) {
    if (this.sum > sum) return [];
    if (this.children.length === 0) return [];
    const nodes = [];
    const parents = this.value;
    for (const [index, value] of this.children.entries()) {
      const remaining = this.children.slice(index + 1);
      nodes.push(new Node(value, parents, remaining));
    }
    return nodes;
  }

  get value() {
    if(!this.digit) return this.parents; 
    return [...this.parents, this.digit];
  }

  get sum() {
    return this.value.reduce((value, acc) => value + acc, 0);
  }
}

class Tree {
  constructor(nums) {
    this.root = new Node(null, [], nums);
  }

  traverseDF(sum) {
    console.log(sum + " ------------");
    const collection = [...this.root.getChildNodes(sum)];

    while (collection.length > 0) {
      const node = collection.shift();

      if (node.sum === sum) {
        console.log(node.value);
      } else {
        collection.unshift(...node.getChildNodes(sum));
      }
    }
    console.log("---------------");
  }
}

function subsetSum(nums, targetSum) {
  const tree = new Tree(nums);
  tree.traverseDF(targetSum);
}
