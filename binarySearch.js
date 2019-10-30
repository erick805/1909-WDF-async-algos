/*
Binary Search

Write a function that implements binary search.
Problem
Given a sorted array of numbers, locate the index of a specified value according to the following algorithm.First identify the middle number in the array.Next determine if the value to be found is greater than, lower than, or equal to the middle number.If it is equal, you are finished, and output the index of the found value.If not, repeat the procedure for a smaller array, formed from by taking half of the given array that the specified number falls into.

THIS IS AN EXAMPLE FOR THE INTERVIEWER.  HAVE YOUR CANDIDATE COME UP WITH THEIR OWN EXAMPLE!
Example
Consider the array[1, 3, 4, 7, 12, 17, 20].We want to locate the index of 17. First compare 17 to the middle of the array, which is 7. Because 17 > 7 we then repeat the comparison using the subarray[12, 17, 20].We find that 17 matches the middle of this array, and so we output the index from the original array, which is 5. Note that we do not output the index of 17 from the smaller subarray.
*/

// SOLUTION 1 - recursive - *works with strings
// Time Complexity
// O(logn)

// Space Complexity
// O(logn)
const binarySearch = (arr, target) => {
  if (arr.length === 0 || (arr.length === 1 && arr[0] !== target)) {
    return -1;
  }

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return mid;
  if (target < arr[mid]) return binarySearch(arr.slice(0, mid), target);
  if (target > arr[mid]) {
    const result = binarySearch(arr.slice(mid + 1), target);
    return result === -1 ? -1 : mid + 1 + result;
  }
};

// SOLUTION 2 - iterative - *does not work with strings*
// Time Complexity
// O(logn)

// Space Complexity
// O(1)

function binarySearch(arr, target) {
  // initial values for start, middle and end
  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (arr[mid] !== target && start < stop) {
    if (target < arr[mid]) {
      stop = mid - 1;
    } else {
      start = mid + 1;
    }
    // recalculate middle on every iteration
    mid = Math.floor((start + stop) / 2);
  }
  // if the current middle item is what we're looking for return it's index, else return -1
  return arr[mid] !== target ? -1 : mid;
}

console.log(binarySearch([1, 2, 5, 7, 8, 9], 2)); // => 1
console.log(binarySearch([1, 2, 5, 7, 8, 9], 8)); // => 4
console.log(binarySearch([1, 2, 5, 7, 8, 9], 9)); // => 5
console.log(binarySearch([1, 2, 5, 7, 8, 9], 11)); // => -1
console.log(binarySearch([1, 2, 5, 7, 8, 9], -5)); // => -1
