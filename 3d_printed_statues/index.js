const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (input) => {
  processInput(input);
});

function processInput(target = 0) {
  const answer = getMinNoOfDays(target);
  console.log(answer);
}

function getMinNoOfDays(target = 0) {
  const targetPrinterCount = Math.floor(target * 0.8);
  let printerCount = 1;
  let statuesPrinted = 0;
  let daysCount = 0;
  while (statuesPrinted < target) {
    daysCount++;
    if (statuesPrinted + printerCount >= target) break;
    if (printerCount < targetPrinterCount) {
      printerCount += printerCount;
      continue;
    }
    printerCount += targetPrinterCount;
    statuesPrinted += printerCount - targetPrinterCount;
  }
  return daysCount;
}
