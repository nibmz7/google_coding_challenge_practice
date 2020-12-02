function MagicDictionary() {
  this.words = {};
}

MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    const wordLength = word.length;
    if (this.words[wordLength] == null) this.words[wordLength] = [];
    this.words[wordLength].push(word);
  }
};

MagicDictionary.prototype.search = function (searchWord) {
  const wordLength = searchWord.length;
  if(this.words[wordLength] == null) return false;
  loopWords: for (const word of this.words[wordLength]) {
    let differenceCount = 0;
    for (let i = 0; i < wordLength; i++) {
      if (searchWord[i] !== word[i]) differenceCount++;
      if (differenceCount > 1) continue loopWords;
    }
    if (differenceCount === 1) return true;
  }
  return false;
};

const magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
console.log(magicDictionary.search("hello"));
