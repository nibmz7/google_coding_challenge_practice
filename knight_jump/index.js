const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function getInput() {
  return new Promise((res) => {
    let input = undefined;
    const board = [];
    const startPos = { x: 0, y: 0 };
    rl.on("line", (line) => {
      if (input === undefined) {
        input = {};
        return;
      }
      const row = [];
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "K") {
          startPos.x = i;
          startPos.y = board.length;
        }
        row.push(line[i]);
      }

      board.push(row);
    });

    rl.on("close", () => {
      input = {
        board,
        startPos,
        maxX: board[0].length - 1,
        maxY: board.length - 1,
      };
      res(input);
    });
  });
}

function getNextMoves(
  input = {},
  posArray = [],
  visitedPos = { "0,0": true },
  stepCount = 0
) {
  const nextMoves = [];
  for (const { x, y } of posArray) {
    if (x === 0 && y === 0) return stepCount;
    const newMove = (x, y) => {
      if (x === 0 && y === 0) return true;
      if (x >= 0 && x <= input.maxX && y >= 0 && y <= input.maxY)
        if (input.board[y][x] !== "#") {
          const key = `${x},${y}`;
          if (!(key in visitedPos)) {
            visitedPos[key] = true;
            nextMoves.push({ x, y });
          }
        }
      return false;
    };
    const found =
      newMove(x + 1, y + 2) ||
      newMove(x - 1, y + 2) ||
      newMove(x + 1, y - 2) ||
      newMove(x - 1, y - 2) ||
      newMove(x + 2, y + 1) ||
      newMove(x - 2, y + 1) ||
      newMove(x + 2, y - 1) ||
      newMove(x - 2, y - 1);
    if (found) return stepCount + 1;
  }
  if (nextMoves.length === 0) return -1;
  return getNextMoves(input, nextMoves, visitedPos, stepCount + 1);
}

async function solve() {
  const input = await getInput();
  const answer = getNextMoves(input, [input.startPos]);
  console.log(answer);
}

solve();
