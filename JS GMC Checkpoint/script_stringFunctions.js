// Reverse a String:
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: 'olleh'

// Count Characters:
function countCharacters(str) {
  return str.length;
}

// Example usage:
const myString = "Hello, world!";
const charCount = countCharacters(myString);
console.log(charCount); // Output: 13

// Capitalize Words:
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage:
const inputSentence = "this is a sample sentence";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence); // Output: 'This Is A Sample Sentence'
