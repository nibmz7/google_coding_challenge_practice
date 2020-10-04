const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (chunk) => {
  processInput(chunk);
});

function processInput(data = "") {
  const countTracker = [];
  let length = data.length - 1;
  let index = length;
  while (index >= 0) {
    const number = Number(data[index]);
    const isEven = number % 2 === 0 ? 1 : 0;
    const nextIndexCount = countTracker[index + 1] || 0;
    countTracker[index] = isEven + nextIndexCount;
    index--;
  }

  console.log(countTracker.join(' '));
}
