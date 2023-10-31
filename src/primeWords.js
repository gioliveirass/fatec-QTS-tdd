const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

export function clearPhrase(phraseToClear) {
  const cleanPhrase = phraseToClear
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return cleanPhrase;
}

export function getWordsOfPhrase(cleanPhrase) {
  const words = cleanPhrase.split(" ");

  return words;
}

export function replaceLettersWithNumbersByWord(words) {
  const replacedWords = [];

  words.forEach((word) => {
    const letters = word.split("");
    const replacedLetters = [];

    letters.forEach((letter) => {
      const correspondingNumber = alphabet[letter];
      replacedLetters.push(correspondingNumber);
    });

    replacedWords.push(replacedLetters.join(" "));
  });

  return replacedWords;
}

export function sumNumbersByWords(wordsReplacedWithNumbers) {
  const sums = [];

  wordsReplacedWithNumbers.forEach((word) => {
    let sum = 0;

    const numbers = word.split(" ");

    numbers.forEach((number) => {
      sum += parseInt(number);
    });

    sums.push(sum);
  });

  return sums;
}

export function checkIfWordIsPrime(addedNumbersByWord) {
  const checkedWords = [];

  addedNumbersByWord.forEach((addedNumber) => {
    let dividers = 0;

    for (
      let previousNumbers = 1;
      previousNumbers <= addedNumber;
      previousNumbers++
    ) {
      if (addedNumber % previousNumbers === 0) dividers += 1;
    }

    checkedWords.push(dividers == 2);
  });

  return checkedWords;
}
