// A to Z in Morse Code
import convertToMorse from "./engToMorse.js";

console.log(convertToMorse("testtest"));

const button = document.querySelector(".container_button");
const englishTextField = document.querySelector(".container_english");
const morseTextField = document.querySelector(".morse_container");

button.addEventListener("click", () => {
  let englishText = englishTextField.value;
  morseText.textContent = convertToMorse(englishText);
});
