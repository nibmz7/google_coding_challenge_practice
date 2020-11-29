console.log(parseArray2("[]"));
console.log(parseArray2("[1, 2, 3]"));
console.log(parseArray2("[1, [2, [3, 7], 4], 5]"));
console.log(parseArray2("[1, [2, [34, 4], 4], 5, [8, 0, 1]]"));

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

//Theoretically faster O(n)
function parseArray2(str) {
  const OPEN_BRACKET = "[";
  const CLOSE_BRACKET = "]";
  const mainArrayString = str.replace(/\s/g, "").slice(1);

  const lastIndex = mainArrayString.length - 1;
  let currentItem = "";
  let currentIndex = 0;

  const getSubArray = () => {
    const result = [];
    while (currentIndex <= lastIndex) {
      const char = mainArrayString[currentIndex];
      currentIndex++;

      if (char === OPEN_BRACKET) {
        const subArray = getSubArray();
        result.push(subArray);
        const nextChar = mainArrayString[currentIndex];
        if(nextChar === ',') currentIndex++;
        if(nextChar === CLOSE_BRACKET) {
          return result;
        }
        continue;
      }

      if (char === "," || char === CLOSE_BRACKET) {
        result.push(Number(currentItem));
        currentItem = "";
      } else {
        currentItem += char;
      }

      if (char === CLOSE_BRACKET) {
        return result;
      }
    }
  };

  return getSubArray(mainArrayString);
}
