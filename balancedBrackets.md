// Write a function that takes in a string made up of brackets
// ("(", "[", "{") and other optional characters.  The function should
// return a boolean representing whether or not the string is balanced
// in regards to brackets.  A string is said to be balanced if it has as many
// opening brackets of a given type as it has closing brackets of that type
// and if no bracket is unmatched.  Note that a closing bracket cannot
// match a corresponding opening bracket that comes after it.  Similarly,
// brackets cannot overlap each other as in '[(])'

//Input (str) Output boolean

// Edge Cases
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

console.log(balancedBrackets(""));
console.log(balancedBrackets("["));
console.log(balancedBrackets("()"));
console.log(balancedBrackets("a"));
console.log(balancedBrackets("{a}"));
console.log(balancedBrackets("[(])"));
console.log(balancedBrackets("[]()"));
console.log(balancedBrackets("[({})]"));
console.log(balancedBrackets("[({})"));
