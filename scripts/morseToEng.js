// A to Z in morse code
const morseTextField = document.querySelector(".container_morse");
const englishTextField = document.querySelector(".container_english");
const morse = /^[-. ]*$/;
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

const convertToEnglish = (morse) => {
  const swapped = Object.entries(morseValues).reduce((total, [key, value]) => {
    total[value] = key;

    return total;
  }, {});

  const splitMorse = morse.split(" ");

  return splitMorse.reduce((total, curr) => {
    if (curr === "") {
      total += " ";
      return total;
    }
    if (!Object.keys(swapped).includes(curr)) {
      throw new Error("Invalid morse input");
    }

    total += `${swapped[curr]}`;
    return total;
  }, "");
};

export default convertToEnglish;
