const { read } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

const inputs = [];
let firstLine = true;

rl.on("line", (chunk) => {
  if (firstLine) firstLine = false;
  else inputs.push(Number(chunk));
});

rl.on("close", () => {
  processInputs();
});

function processInputs() {
  for (let input of inputs) {
    const nearestPerfectSquare = Math.floor(Math.sqrt(input));
    const nearestSquare = Math.pow(nearestPerfectSquare, 2);
    console.log(nearestPerfectSquare);
    const nearestSquareIndex = nearestSquare + nearestPerfectSquare;
    let inputQuotient;
    if (nearestSquareIndex === input || nearestSquareIndex - 1 === input) {
      inputQuotient = nearestSquare;
    } else if (input > nearestSquareIndex) {
      const diff = input - nearestSquareIndex;
      inputQuotient = nearestSquare + diff;
    } else if (nearestSquareIndex > input) {
      const diff = nearestSquareIndex - input;
      inputQuotient = nearestSquare - diff + 1;
    }
    console.log(inputQuotient);
  }
}

// 649420617345
// 649419998010