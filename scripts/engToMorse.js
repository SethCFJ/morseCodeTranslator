// A to Z in Morse Code
const englishTextField = document.getElementById("englishText");
const morseValues = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

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
