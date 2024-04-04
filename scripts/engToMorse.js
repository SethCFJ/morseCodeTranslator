// A to Z in Morse Code
import { morseValues } from "../data/morseValues.js";

const convertToMorse = (string) => {
  const letters = string.split("");
  console.log(letters);
  return letters.reduce((total, curr) => {
    if (curr === " ") {
      total += curr;
      return total;
    }
    if (/^[A-Za-z ]*$/.test(curr) === false) {
      throw new Error("Only accepts letters");
    }
    total += `${morseValues[curr.toUpperCase()]} `;
    console.log(total);
    return total;
  }, "");
};

export default convertToMorse;
