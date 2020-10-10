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
  if (target === 1 || target === 2) return target;
  const targetPrinters = Math.floor(target * 0.8);
  let printerCount = 1;
  let statuesPrinted = 0;
  let daysCount = 0;
  while (statuesPrinted < target) {
    daysCount++;
    if (statuesPrinted + printerCount >= target) break;
    const printerPrinting = printerCount - targetPrinters;
    statuesPrinted += printerPrinting > 0 ? printerPrinting : 0;
    printerCount +=
      printerCount > targetPrinters ? targetPrinters : printerCount;
  }
  return daysCount;
}
