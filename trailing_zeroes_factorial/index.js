const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

let inputs = [];
let firstLine = true;

rl.on("line", (chunk) => {
  if (firstLine) firstLine = false;
  else {
    inputs.push(Number(chunk));
  }
});

rl.on("close", () => {
  processInput();
});

function findTrailingZeroes(n) {
  let count = 0;
  let i = 5;
  while (n / i >= 1) {
    count += Math.floor(n / i);
    i *= 5;
  }
  return count;
}

function roundToNearest5(x) {
  return Math.floor(x / 5) * 5;
}

function getEstimatedFactorialNumber(trailingZeroesCount) {
  const number = Math.floor(trailingZeroesCount / 25) * 2 + trailingZeroesCount;
  return roundToNearest5(number);
}

//every
//  5 steps trailing zero increase by 1
//every 25 steps trailing zero increases by 2

function processInput() {
  for (const trailingZeroesCount of inputs) {
    const answers = [];
    let estimatedFactorialNumber = getEstimatedFactorialNumber(
      trailingZeroesCount
    );

    while (true) {
      const results = findTrailingZeroes(estimatedFactorialNumber);
      if (results === trailingZeroesCount) break;
      if (results > trailingZeroesCount) {
        estimatedFactorialNumber = 0;
        break;
      }
      estimatedFactorialNumber += 5;
    }
    if(!estimatedFactorialNumber) {
        console.log(0);
        continue;
    }
    for (let i = 0; i < 5; i++) {
      answers.push(estimatedFactorialNumber++);
    }
    console.log(answers.length);
    console.log(answers.join(" "));
  }
}
