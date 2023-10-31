import {
  checkIfWordIsPrime,
  clearPhrase,
  getWordsOfPhrase,
  replaceLettersWithNumbersByWord,
  sumNumbersByWords,
} from "./primeWords.js";

const phrase = "Olá mundo";

const cleanPhrase = clearPhrase(phrase);
const words = getWordsOfPhrase(cleanPhrase);
const replacedWords = replaceLettersWithNumbersByWord(words);
const sumWords = sumNumbersByWords(replacedWords);
const checkedWords = checkIfWordIsPrime(sumWords);

console.log("================================================================");
console.log("- Frase de entrada: " + phrase);
console.log("- Validação de palavras primas: " + JSON.stringify(checkedWords));
console.log("================================================================");
