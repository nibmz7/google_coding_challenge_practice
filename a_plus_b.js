const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

let inputs = [];

rl.on("line", (chunk = "") => {
  const args = chunk.split(" ");
  inputs.push({
    a: getNumbers(args[0]),
    b: getNumbers(args[1]),
  });
});

rl.on("close", () => {
    processInput(inputs);
});

function getNumbers(number = "012345678910992838") {
  let numbers = [];
  let rightIndex = number.length;
  let leftIndex = 0;
  while (rightIndex !== 0) {
    const nextIndex = rightIndex - 10;
    leftIndex = nextIndex < 0 ? 0 : nextIndex;
    const part = number.substring(leftIndex, rightIndex);
    numbers.push(Number(part));
    rightIndex = leftIndex;
  }
  return numbers;
}

function processInput(inputs = [{ a: [0], b: [0] }]) {
  for (const input of inputs) {
    let output = "";
    let indexA = 0;
    let indexB = 0;
    let carryover = 0;
    while (indexA < input.a.length || indexB < input.b.length) {
      const a = input.a[indexA++] || 0;
      const b = input.b[indexB++] || 0;
      let sum = (a + b + carryover).toString();
      if (sum.length > 10) {
        const excess = sum.length - 10;
        carryover = Number(sum.substring(0, excess));
        sum = sum.substring(excess, sum.length);
      } else carryover = 0;
      output = sum + output;
    }
    console.log(output);
  }
}
