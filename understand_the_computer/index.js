const { read } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

let firstLine = true;

rl.on("line", (chunk) => {
  if (firstLine) firstLine = false;
  else processInput(Number(chunk));
});

function dec2bin(dec) {
  return dec.toString(2);
}

// 2^1,2^3,2^5,2^7,2^9,2^11,2^13
function processInput(input) {
  let inputBitsLength = dec2bin(input).length;
  let msbSize;
  let binaryLengthMinusMSB;
  let msb;
  let msbValue;
  if (inputBitsLength % 2 !== 0) {
    msbSize = (inputBitsLength + 1) / 2;
    binaryLengthMinusMSB = inputBitsLength - msbSize + 1;
    msb = input >>> binaryLengthMinusMSB;
    msbValue = msb << (binaryLengthMinusMSB - 1);
  } else {
    msbSize = inputBitsLength / 2;
    binaryLengthMinusMSB = inputBitsLength - msbSize;
    msb = input >>> binaryLengthMinusMSB;
    msbValue = msb << binaryLengthMinusMSB;
  }
  const nearestRepeatedIndex = msbValue;
  const nearestRepeatedIndexValue = nearestRepeatedIndex - msb;
  if (nearestRepeatedIndex === input) {
    inputQuotient = nearestRepeatedIndexValue;
  } else {
    const diff = input - nearestRepeatedIndex;
    inputQuotient = nearestRepeatedIndexValue + diff;
  }
  console.log(input, inputQuotient, nearestRepeatedIndex);
}

// 649420617345
// 252089752599

// 649419998010
// 252089271776
