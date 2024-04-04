import convertToMorse from "./engToMorse.js";
import convertToEnglish from "./morseToEng.js";

const englishTextField = document.querySelector(".container_english");
const morseTextField = document.querySelector(".container_morse");
const errorMsg = document.querySelector(".errorMsg");
const morse = /^[-. ]*$/;
const letters = /^[A-Za-z ]*$/;

englishTextField.addEventListener("keyup", (e) => {
  try {
    errorMsg.innerHTML = "";

    if (
      (letters.test(e.key) === true || e.key === "Backspace") &&
      e.key != "Enter"
    ) {
      morseTextField.value = "";
      const englishText = englishTextField.value;
      morseText.value = convertToMorse(englishText);
    }
    // else {
    //   alert("Enter valid letters from A-Z");
    //   morseTextField.value = "";
    //   englishTextField.value = "";
    // }
  } catch (e) {
    errorMsg.innerHTML = e;
  }
});

morseTextField.addEventListener("keyup", (e) => {
  try {
    errorMsg.innerHTML = "";

    if (
      (morse.test(e.key) === true || e.key === "Backspace") &&
      e.key != "Enter"
    ) {
      englishTextField.value = "";
      const morseText = morseTextField.value;
      englishText.value = convertToEnglish(morseText);
    }
  } catch (e) {
    errorMsg.innerHTML = e;
  }
});
