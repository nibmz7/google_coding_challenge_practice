const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (chunk) => {
  powerSet(Array.from(chunk));
});

function powerSet(data) {
  const length = data.length;
  const powerSet = [];
  const powerSetSize = Math.pow(2, length);
  for (let sequence = 0; sequence < powerSetSize; sequence++) {
    const subset = [];
    for (const [index, value] of data.entries()) {
      const activeNthBit = 1 << index;
      if ((sequence & activeNthBit) !== 0) {
        subset.push(value);
      }
    }
    powerSet.push(subset);
  }
  powerSet.forEach(subset => console.log(subset))
}
