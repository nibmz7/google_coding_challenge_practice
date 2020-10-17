const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

const data = {};
let y = 1;
let knightsCount = 0;

rl.on("line", (chunk) => {
  const row = {};
  let x = 1;
  let isEmpty = true;
  for (const char of chunk) {
    if (char === "k") {
      row[x] = true;
      isEmpty = false;
      knightsCount++;
    }
    x++;
  }
  if (!isEmpty) data[y] = row;
  y++;
});

rl.on("close", () => {
  processInput(data);
});

function processInput(board) {
  if (knightsCount !== 9) {
    console.log("invalid");
    return;
  }
  const MIN_INDEX = 1;
  const MAX_INDEX = 5;

  for (const [keyY, row] of Object.entries(board)) {
    const y = Number(keyY);
    if (y === MAX_INDEX) continue;
    for (const keyX of Object.keys(row)) {
      const x = Number(keyX);
      const oneRowBelow = y + 1;
      const twoRowsBelow = y + 2;
      if (oneRowBelow in board) {
        const row = board[oneRowBelow];
        const twoBoxesLeft = x - 2;
        const twoBoxesRight = x + 2;
        if (twoBoxesLeft in row || twoBoxesRight in row) {
          console.log("invalid");
          return;
        }
      }
      if (twoRowsBelow in board) {
        const row = board[twoRowsBelow];
        const oneBoxLeft = x - 1;
        const oneBoxRight = x + 1;
        if (oneBoxLeft in row || oneBoxRight in row) {
          console.log("invalid");
          return;
        }
      }
    }
  }
  console.log("valid");
}
