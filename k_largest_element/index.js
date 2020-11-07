const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function getInput() {
  return new Promise((res) => {
    let nums, k;
    rl.on("line", (line) => {
      if (!k) {
        k = Number(line);
        return;
      }
      nums = line.split(",").map(Number);
    });

    rl.on("close", () => res({ k, nums }));
  });
}

async function solve() {
    const {k, nums} = await getInput();
    console.log(k, nums);
    const big
}

solve();
