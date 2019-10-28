/*
Given a sorted array, find out if any two elements in the array add up to the target sum.
input = (arr,target), output = boolean

Edge Case
([],5) => false
([-1,3,5],4) => true
([1],2) => false

*/

// Time Complexity
// O(n^2) time

// Space Complexity
// O(1) space
function sumTarget(arr, target) {
  if (!arr.length) return false;
  if (arr[0] >= target) return false;

  // do a double for loop over each element, not counting the same element
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // see if the elements add up to target, if target === sum of elements === true

      if (arr[i] + arr[j] === target) return true;
    }
  }
  // default return false, if we leave the loop
  return false;
}

// Time Complexity
// O(logn) time

// Space Complexity
// O(1) space

function sumTarget(arr, target) {
  if (!arr.length) return false;
  if (arr[0] >= target) return false;

  // since we know this is sorted, we can set pointers to a index value for beg, end
  let beg = 0;
  let end = arr.length - 1;

  while (end > beg) {
    // if end + beg === target, return true
    if (arr[beg] + arr[end] === target) return true;
    // else if end + beg < target, increment index for beg
    else if (arr[beg] + arr[end] < target) beg++;
    // else end + beg > target, decrement index for end
    else end--;
  }

  // default return false, if we leave the loop
  return false;
}
