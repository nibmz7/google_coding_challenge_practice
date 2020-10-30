const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @return {ListNode[]}
 */
function getNodes() {
  return new Promise((res) => {
    const lists = [];
    let curNode;
    rl.on("line", (line) => {
      if (line.length === 0) {
        curNode = null;
        return;
      }
      const node = new ListNode(Number(line));
      if (curNode) {
        curNode.next = node;
        curNode = node;
      }
      if (curNode === null) {
        curNode = node;
        lists.push(node);
      }
    });

    rl.on("close", () => {
      res(lists);
    });
  });
}

function sortNodes(curNode, nodes) {
  nodes.forEach((node, index) => {
    const nodeVal = node.val;
    if (node.next) nodes[index] = node.next;
    else nodes.splice(index, 1);
    if (!rootNode) {
      rootNode = ListNode(nodeVal);
      continue;
    }
    if (nodeVal < rootNode.val) {
        rootNode = new ListNode(nodeVal)
    }
  });
  if (nodes.length === 0) return;
  else sortNodes(rootNode, nodes);
  return rootNode;
}

async function solve() {
  const nodes = await getNodes();
  const rootNode = sortNodes(null, nodes);
}

solve();
