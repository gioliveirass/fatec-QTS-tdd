import { describe, expect, test } from "@jest/globals";

import {
  checkIfWordIsPrime,
  clearPhrase,
  getWordsOfPhrase,
  replaceLettersWithNumbersByWord,
  sumNumbersByWords,
} from "./primeWords.js";

describe("Prime Words", () => {
  test("Should remove accentuation from the phrase", () => {
    const result = clearPhrase("Olá mundo ÂãáàÚ");
    const expectedResult = "Ola mundo AaaaU";

    expect(result).toBe(expectedResult);
  });

  test("Should return each word in the phrase", () => {
    const result = getWordsOfPhrase("Ola mundo AaaaU");
    const expectedResult = ["Ola", "mundo", "AaaaU"];

    expect(result).toStrictEqual(expectedResult);
  });

  test("Should replace the letters in each word of the phrase with their respective numbers", () => {
    const result = replaceLettersWithNumbersByWord(["Ola", "mundo", "AaaaU"]);

    const expectedResult = ["41 12 1", "13 21 14 4 15", "27 1 1 1 47"];

    expect(result).toStrictEqual(expectedResult);
  });

  test("Should sum each number of each word in the phrase", () => {
    const response = sumNumbersByWords([
      "41 12 1",
      "13 21 14 4 15",
      "27 1 1 1 47",
    ]);

    const expectedResponse = [54, 67, 77];

    expect(response).toStrictEqual(expectedResponse);
  });

  test("Should inform whether each word is a prime or not", () => {
    const response = checkIfWordIsPrime([54, 67, 77]);

    const expectedResponse = [false, true, false];

    expect(response).toStrictEqual(expectedResponse);
  });
});
