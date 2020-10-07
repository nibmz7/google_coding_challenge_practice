const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (chunk) => {
  const nums = chunk.split(",").map((num) => Number(num));
  subsetOR(nums);
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
    if (!this.digit) return this.parents;
    return [...this.parents, this.digit];
  }

  get bitwiseOR() {
    return this.value.reduce((value, acc) => value | acc, 0);
  }
}

class Tree {
  constructor(nums) {
    this.root = new Node(null, [], nums);
  }

  traverseBF(targetValue) {
    console.log(targetValue + " ------------");
    const collection = [...this.root.getChildNodes(targetValue)];

    while (collection.length > 0) {
      const node = collection.shift();

      if (node.bitwiseOR === targetValue) {
        console.log(node.value);
      } else {
        collection.push(...node.getChildNodes(targetValue));
      }
    }
    console.log("---------------");
  }
}

function subsetOR(nums) {
  const maximumOR = nums.reduce((num, acc) => num | acc, 0);
  const tree = new Tree(nums);
  tree.traverseBF(maximumOR);
}
