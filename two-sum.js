/**
 * Question: Given an array of integers, 
   return the indices of the two numbers that add up to a given target. 
    
   * Step 1: Verify the constaints
        * Are all the numbers in the given array positive integers? --> yes
        * Are there duplicates in the array? --> no
        * Will there always be a solution available? --> no should return null
        * Can there be multiple pairs that add up to the target value? --> No       
   * Step 2: Write out some test cases
   * Step 3: Figure out a solution without code.
   * Step 4: Write out solution in code.
   * Step 5: Double check for errors
   * Step 6: Test code with test cases
   * Step 7: Speed and time complexity of the solution.
   * Step 8: Can the solution be optimized?
*/

const twoSum = function(arr, target) {
     // if (arr.length < 2) return null; 
     // for (let i = 0; i < arr.length - 1; i ++) {
     //      for (let j = i + 1; j < arr.length; j++) {
     //           if (arr[i] + arr[j] === target) {
     //                return [i, j];
     //           }
     //      }
     // }
     var hash = {};
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] in hash) {
               return [hash[arr[i]], i];
          } else hash[target - arr[i] ] = i;
     }
     return null;
}

console.log(twoSum([], 3)); // null
console.log(twoSum([1], 3)); // null
console.log(twoSum([1,2], 3)); // [0,1]
console.log(twoSum([1,2], 4)); // null
console.log(twoSum([1,3,7,9,2], 11)); // [3,4]
