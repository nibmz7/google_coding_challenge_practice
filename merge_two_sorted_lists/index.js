const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function getInputLists() {
  const getLinkedList = (line) => {
    return line.split(",").reduceRight((acc, value) => {
      return new ListNode(Number(value), acc);
    }, undefined);
  };
  return new Promise((res) => {
    let l1, l2;
    rl.on("line", (line) => {
      if (!l1) l1 = getLinkedList(line);
      else l2 = getLinkedList(line);
    });

    rl.on("close", () => {
      res({ l1, l2 });
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

async function solve() {
  const { l1, l2 } = await getInputLists();
  const answer = mergeTwoLists(l1, l2);
  let head = answer;
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}

solve();
