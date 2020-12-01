console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
console.log(
  longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
);

function longestWord(words) {
  words.sort();

  const wordSet = new Set(words);
  let result = "";

  wordLoop: for (const word of words) {
    if (word.length <= result.length) continue;
    let subWord = "";
    for (const char of word) {
      subWord += char;
      if (!wordSet.has(subWord)) continue wordLoop;
    }
    result = word;
  }

  return result;
}
