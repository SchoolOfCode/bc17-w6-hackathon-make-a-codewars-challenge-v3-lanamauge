# Title Case Kata
<details>
  <summary><b>✏️ Plan</b></summary>

  I came up with the following kata ideas:

1. Find the second largest number in an array
2. Find the missing number in a sequence
3. Sorting words by length


and whittle it down to one:
A function that takes in a string and returns the same string but with the first letter of each word capitalised.

I had a few strecth goals...
1. For the test to only accept alphabetical characters. Any strings input containing symbols or numbers should throw an error. ✅
2. For the input string to be less that a certain number of letters.

</details>

<br>

Hello challenger! 
Your task is to complete the function named `titleCase` in main.js which takes in a string and returns the same string but with the first letter of each word capitalised.

## Goals
Your function should:
- Handle strings of any length.
- Only accept alphabetical characters. Any strings input containing symbols or numbers should throw an error.

Here are a couple of examples of what you are aiming for:
- If the string input is `"coding is fun"`, the function should return `"Coding Is Fun"`
- If the string input is `"school of code"`, the function should return `"School Of Code"`
<br>

## Tests
Title Case Conversion Test: This test checks if the titleCase function converts a string to title case, where each word starts with an uppercase letter. For instance, "hope this works" should become "Hope This Works".

Input Validation Test: This test ensures that titleCase throws an error for strings containing non-alphabetical characters. For example, "Th1s sh0uld thr0w an error and pass tests!" should trigger an error with the message 'Invalid input: Only alphabetical characters and spaces are allowed.' If you are successful, the tests will pass.
<br>
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
 // Validate that the string contains only alphabetical characters and spaces
      if (/[^a-zA-Z\s]/.test(string)) {
        throw new Error('Invalid input: Only alphabetical characters and spaces are allowed.');
    }
        // Split the string by spaces
        return string.split(' ')
                     .map(word => 
                         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalise the first letter of each word
                     .join(' ');  // Join the words back together with spaces
