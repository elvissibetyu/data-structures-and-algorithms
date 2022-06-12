/**
 * Question: Given an heightay of intergers representing an elevation map,
   where the width of each bar is 1, return how much rainwater can be trapped.
    
   * Step 1: Verify the constaints
        * Do the left and right sides of the graph count as walls? --> no
        * Will there be negative integers? --> no     
   * Step 2: Write out some test cases
   * Step 3: Figure out a solution without code.
   * Step 4: Write out solution in code.
   * Step 5: Double check for errors
   * Step 6: Test code with test cases
   * Step 7: Speed and time complexity of the solution.
   * Step 8: Can the solution be optimized?
*/

const trappedRainWater = function(height) {
   let total = 0;
   for (let i = 1; i < height.length -1; i ++) {
        if (height[i] === 0 || (height[i] < height[i + 1] && height[i] < height[i - 1])) {
            let left = i - 1;
            let right = i + 1;
            a = [];
            b = [];
            for (let j = left; j >= 0; j--) {
                if (height[j] > height[j - 1]) {
                    a.push(height[j]);
                    break;
                } else {
                    a.push(height[j]);
                }
            }
            for (let j = right; j < height.length; j++) {
                if (height[j] > height[j+1]) {
                    b.push(height[j])
                    break;
                } else {
                    b.push(height[j])
                }
            }
            const highestForWater = Math.min(a[a.length - 1], b[b.length - 1]);
            total += highestForWater - height[i]; // [4,2,0,3,2,5]
            for (let i = 0; i < a.length - 1; i ++) {
                total += (highestForWater - a[i]);
            }
            for (let i = 0; i < b.length - 1; i ++) {
                total += (highestForWater - b[i]);
            }
            console.log({a: a});
            console.log({b: b});
        }
   }
   return total;
}

//console.log(trappedRainWater([])); 
console.log(trappedRainWater([4,2,0,3,2,5])); 
console.log(trappedRainWater([0,1,0,2,1,0,3,1,0,1,2])); // 8
console.log(trappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); 
