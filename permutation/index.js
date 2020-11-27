const { stdin } = require("process");
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
  console.log(permute(Array.from(line)));
});

function permute(line = []) {
  if (line.length === 0) return [];
  if (line.length === 1) return [line];
  const result = [];
  for (let i = 0; i < line.length; i++) {
    const currentChar = line[i];
    const remaining = line.slice(0, i).concat(line.slice(i + 1));
    const remainingPermuted = permute(remaining);
    for(const set of remainingPermuted) {
        const permutedArray = [currentChar].concat(set);
        result.push(permutedArray);
    }
  }
  return result;
}
