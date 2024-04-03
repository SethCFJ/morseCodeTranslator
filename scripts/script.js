// A to Z in Morse Code
import convertToMorse from "./engToMorse.js";
import convertToEnglish from "./morseToEng.js";
console.log(convertToMorse("test test"));

const englishTextField = document.querySelector(".container_english");
const morseTextField = document.querySelector(".container_morse");

const morse = /^[-. ]*$/;
const letters = /^[A-Za-z ]*$/;
englishTextField.addEventListener("keyup", (e) => {
  if (
    (letters.test(e.key) === true || e.key === "Backspace") &&
    e.key != "Enter"
  ) {
    const englishText = englishTextField.value;
    morseText.value = convertToMorse(englishText);
  }
  // else {
  //   alert("Enter valid letters from A-Z");
  //   morseTextField.value = "";
  //   englishTextField.value = "";
  // }
});

morseTextField.addEventListener("keyup", (e) => {
  if (
    (morse.test(e.key) === true || e.key === "Backspace") &&
    e.key != "Enter"
  ) {
    const morseText = morseTextField.value;
    englishText.value = convertToEnglish(morseText);
  }
});
