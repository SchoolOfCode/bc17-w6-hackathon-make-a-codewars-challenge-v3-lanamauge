# Title Case Kata

Hello challenger! Your task is to complete the function named `titleCase` in main.js which takes in a string and returns the same string but with the first letter of each word capitalised.

Here are a couple of examples of what you are aiming for:
- If the string input is `"coding is fun"`, the function should return `"Coding Is Fun"`
- If the string input is `"school of code"`, the function should return `"School Of Code"`

<br>

---

<br>

<details>
  <summary><b>🔍 Click for clues</b></summary>

  Here's a cheeky plan to help you...

1. Iterate over each word in the array and apply the transformation function
2. Convert the first character to uppercase
3. Convert the rest of the characters to lowercase
4. Combine these two parts to get the word with the first letter capitalised
5. Combine the transformed words back into a single string with spaces between them

  <img src="https://media1.tenor.com/m/dRXoSRL9H9MAAAAC/the-woobles-woobles.gif" alt="Image" style="width: 300px; height: 250px;">
</details>

<br>

<details>
  <summary><b>🏆 Click for answer</b></summary>

  <img src="https://media1.tenor.com/m/vtgvGh5EuaQAAAAC/roll-safe-clever.gif" alt="Image" style="width: 350px; height: 200px;">

  ```javascript
  export function titleCase(string) {
      // Split the string by spaces
      return string.split(' ')
                   .map(word => 
                       word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalise the first letter of each word
                   .join(' ');  // Join the words back together with spaces
  }
