Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {    //}


console.log(maxSubarraySum([1, 2, 5, -20, 8, -10, 5], 2)); // 7
console.log(maxSubarraySum([-1, -2, -5, -20, -8, -10, -5], 2)); // -3
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

steps
- check the length of Array with the given number(n), if it is less then return 'null'
- sum (sum1) the first n numbers and compare with the next integer 
        if the next integer is less than the sum(sum1) then leave it
        else sum it with the next integer (sum2) and compare with the sum1
            if the new sum(sum2) is less then keep adding next integer and do the same
            else if sum(sum2) is greater then add all next integer for n consecutive integer and move to next n integer set
            end
        end

