const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function getPath() {
  const pathY = { 0: { 0: 0 } };
  const minPos = { x: 0, y: 0 };
  const maxPos = { x: 0, y: 0 };
  const curPos = { x: 0, y: 0 };
  return new Promise((res) => {
    rl.on("line", (line) => {
      switch (line) {
        case "left":
          curPos.x--;
          break;

        case "right":
          curPos.x++;
          break;

        case "up":
          curPos.y--;
          break;

        case "down":
          curPos.y++;
          break;
      }
      const { x, y } = curPos;
      if (x < minPos.x) minPos.x = x;
      if (y < minPos.y) minPos.y = y;
      if (x > maxPos.x) maxPos.x = x;
      if (y > maxPos.y) maxPos.y = y;
      if (!(y in pathY)) pathY[y] = {};
      pathY[y][x] = x;
    });

    rl.on("close", () => {
      res({ pathY, minPos, maxPos, endPos: curPos });
    });
  });
}

async function drawMap() {
  const { pathY, minPos, maxPos, endPos } = await getPath();
  const length = maxPos.x - minPos.x + 1;
  const outline = "#".repeat(length + 2);
  const rowTemplate = " ".repeat(length);
  console.log(outline);
  for (let y = minPos.y; y <= maxPos.y; y++) {
      const row = Array.from(rowTemplate);
    for (const x of Object.values(pathY[y])) {
      let char = "*";
      if (x === 0 && y === 0) char = "S";
      else if (x === endPos.x && y === endPos.y) char = "E";
      const absoluteX = x - minPos.x;
      row[absoluteX] = char;
    }
    console.log(`#${row.join('')}#`);
  }
  console.log(outline);
}

drawMap();
