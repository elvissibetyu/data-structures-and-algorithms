/**
 * Question: Given an array of positive intergers, 
   where each integer represents the height of a vertical line on a chart.
   Find two lines which together with the x-axis forms a container that would
   hold the greatest amount of water. Round the area of water it would hold. 
    
   * Step 1: Verify the constaints
        * Does the thickness of the lines affect the area? --> no
        * Do the left and right sides of the graph count as walls? --> no
        * Do higher lines inside our container affetc our area? --> no     
   * Step 2: Write out some test cases
   * Step 3: Figure out a solution without code.
   * Step 4: Write out solution in code.
   * Step 5: Double check for errors
   * Step 6: Test code with test cases
   * Step 7: Speed and time complexity of the solution.
   * Step 8: Can the solution be optimized?
*/

const containerWithMostWater = function(arr) {
    /** highest = 0;
    if (arr.length <= 1) return 0;
    for (let left = 0; left < arr.length - 1; left ++) {
        for (right = left + 1; right < arr.length; right ++) {
            let height = arr[left] > arr[right] ? arr[right] : arr[left];
            let width = right - left;
            let area = height * width;
            if ( highest < area ) {
                highest = area;
            }
        }
    }
    return highest; **/
    let highest = 0;
    let Pa = 0;
    let Pb = arr.length - 1;
    if (arr.length <= 1) return 0;
    while (Pa !== Pb) {
        let area = Math.min(arr[Pa], arr[Pb]) * (Pb - Pa);
        if (area > highest) {
            highest = area;
        }
        if (arr[Pa] > arr[Pb]) {
            Pb --;
        } else {
            Pa ++;
        }
    }
    return highest;
}

console.log(containerWithMostWater([])); // 0
console.log(containerWithMostWater([1])); // 0
console.log(containerWithMostWater([7,1,2,3,9])); // 28
console.log(containerWithMostWater([6,9,3,4,5,8])); // 32
