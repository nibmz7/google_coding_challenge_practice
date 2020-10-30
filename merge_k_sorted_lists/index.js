const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function getInputList() {
  const getLinkedList = (line) => {
    return line.split(",").reduceRight((acc, value) => {
      return new ListNode(Number(value), acc);
    }, undefined);
  };
  const lists = [];
  return new Promise((res) => {
    rl.on("line", (line) => {
      lists.push(getLinkedList(line));
    });

    rl.on("close", () => {
      res(lists);
    });
  });
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) {
    return !l1 && !l2 ? null : l1 ? l1 : l2;
  }
  const root = new ListNode();
  const leftSmaller = l1.val < l2.val;

  root.val = leftSmaller ? l1.val : l2.val;
  leftSmaller ? (l1 = l1.next) : (l2 = l2.next);

  root.next = mergeTwoLists(l1, l2);
  return root;
}

function mergeKLists(listNodes) {
  if (listNodes.length === 0) return null;
  if (listNodes.length === 1) return listNodes[0];
  const sortedList = [];
  for (let i = 0; i < listNodes.length; i += 2) {
    const sortedSection = mergeTwoLists(listNodes[i], listNodes[i + 1]);
    sortedList.push(sortedSection);
  }
  return mergeKLists(sortedList);
}

async function solve() {
  const list = await getInputList();
  const answer = mergeKLists(list);
  let head = answer;
  const results = [];
  while (head) {
    results.push(head.val);
    head = head.next;
  }
  console.log(results);
}

solve();
