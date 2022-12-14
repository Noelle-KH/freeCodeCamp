# Caesars Cipher

## Description
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) cipher, where the values of the letters are shifted by 13 places. Thus **A ↔ N**, **B ↔ O** and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Answer
1. Use `charCodeAt` check every char code and control the char code between 65 and 90 (A to Z).
2. If char code decoded will less than 65, we need to add back 26(including itself) to ensure char code in the require range of alphabetic.
3. Use `String.fromCharCode()` change char code to character and add to `caesarsCipher` variable.
4. If non-alphabetic character, just add itself to `caesarsCipher` variable.