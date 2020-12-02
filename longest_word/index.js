// console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
// console.log(
//   longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
// );

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
//Longest Word in Dictionary through Deleting
function findLongestWord(searchWord, dictionary) {
  if (searchWord.length === 0) return searchWord;
  dictionary.sort();
  const maxLength = searchWord.length;
  let result = "";
  wordLoop: for (const word of dictionary) {
    let currentIndex = 0;
    let wordLength = word.length;
    for (const char of word) {
      while (char !== searchWord[currentIndex]) {
        currentIndex++;
        if (maxLength - currentIndex < wordLength) continue wordLoop;
        if (currentIndex === maxLength) continue wordLoop;
      }
      wordLength--;
      currentIndex++;
    }
    result = word.length > result.length ? word : result;
  }
  return result;
}

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("", ["b", "a"]));
