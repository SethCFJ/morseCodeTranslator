# Morse Code Translator



## Demo & Snippets
<img width="950" alt="Morse Code Translator" src="https://github.com/SethCFJ/morseCodeTranslator/assets/160681650/6269dd21-fa41-431f-9b61-db63826c391a">


---

## Requirements / Purpose

-   To enable users to translate from Morse Code to English and vice versa.

---

## Build Steps

-   Open the ```index.html``` file in your browser

---

## Design Goals / Approach

-   To make it clear and easy to understand how to operate
-   Two text fields for both English and Morse
-   No need for button as it updates as user types

---

## Features

-   Automatic translation on user typing
-   Live error handling so that undefined or null values arent shown in translation if user inputs incorrect value

---

## Known issues

-   Translating from Morse to English can break but rarely under unknown circumstances

---

## Future Goals

-   To make some kind of animation showing the output of the Morse (light making dots and dashes)

---

## What did you struggle with?

-   The live error handling. As a user could input a fake Morse value and in the English text field it would print 'undefined'. Fixed by making stricter checks before using event handler. 

---

## Licensing Details

-   Unlicensed

---

