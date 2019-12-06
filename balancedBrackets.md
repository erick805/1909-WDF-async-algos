# Prompt

Write a function that determines whether an input string has balanced brackets.

You are given an input string consisting of brackets—square `[ ]`, round `( )`, and curly `{ }`. The input string can include other text. Write a function that returns either `true` if the brackets in the input string are balanced or `false` if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

An empty input string or a string without brackets can also be considered "balanced".

//Input (str) Output boolean

# Examples

```js
// ("") => return false
// ("[") => return false
// ("()") => return true
// ("a") => return false
// ("{a}") => return true
// ("[(])") => return false
// ("[]()") => return true
// ("[({})]") => return true
// ("[({})") => return false

// Store a dictionary of matching brackets
// I want to use a data structure that stores the most recent opening bracket. - A STACK
// Check if most recent opening bracket in stack is a match for most recent closing bracket in string.
// If our stack is empty, we matched all the brackets in the correct order! - return true, if length === 0

// Time Complexity
// O(n)

// Space Complexity
// O(n)

function balancedBrackets(str) {
  if (str.length < 2) return false;
  const matchingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] in matchingBrackets) {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      // if our stack is empty, then we have closing bracket first, just return false
      if (stack.length === 0) return false;
      let lastElem = stack.pop();
      if (str[i] !== matchingBrackets[lastElem]) return false;
    }
  }
  return stack.length === 0;
}
```
