console.log(parseArray("[]"));
console.log(parseArray("[1, 2, 3]"));
console.log(parseArray("[1, [2, [3, 7], 4], 5]"));
console.log(parseArray("[1, [2, [34, 4], 4], 5, [8, 0, 1]]"));

function parseArray(str) {
  const START_BRACKET = "[";
  const CLOSE_BRACKET = "]";
  const input = str.replace(/\s/g, "").slice(1);

  const result = [];

  let openedBrackets = 0;
  let subArrayString = "";
  let currentItem = "";

  for (const char of input) {
    if (char === START_BRACKET) openedBrackets++;
    if (openedBrackets >= 1) {
      subArrayString += char;
      if (char === CLOSE_BRACKET) {
        openedBrackets--;
        if (openedBrackets === 0) {
          const subArray = parseArray(subArrayString);
          result.push(subArray);
          subArrayString = "";
        }
      }
      continue;
    }
    if (char === "," || char === CLOSE_BRACKET) {
      if (currentItem.length >= 1) {
        result.push(Number(currentItem));
        currentItem = "";
      }
    } else {
      currentItem += char;
    }
  }
  return result;
}


