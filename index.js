/**
 * Function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr 
 * @param {*} n 
 */

 /** 
  * Approach:
  * Here we can try to keep the sum of n integers and iterate on the next item. Calculate the new sum using the next item and reducing the previous item.
  * Handle the corner cases to avoid any issue. 
  */
function maxSubarraySum(arr, n) {
    let arrLen; // Array length
    let j;      // No of Subarray
    let sum = 0;
    let maxSum = 0;

    if (
        arr === null ||
        arr === undefined ||
        arr.length === 0 ||
        n === 0 ||
        n === null ||
        n === undefined ||
        arr.length < n
    ) {
        return null;
    }

    arrLen = arr.length;
    /* max subarray for n consecutive integer from the existing array */
    j = arrLen - n; 

    for (let i = 0; i < arrLen; i++) {
        // If all subarrays are done then exit from the loop
        if (j === 0 && arrLen != n) {
            break;
        }
        // Calculate the remaining Subarrays
        if (i >= n) {
            j = j - 1;
        }

        let val = arr[i];
        let preValue;
        let newSum;

        if (i < n) {
            sum = sum + val;
            maxSum = sum;
        } else {
            newSum = 0;
            // Get the previous value to remove from the sum
            preValue = (i - n >= 0 && n > 1) ? arr[i - n] : 0;
            // Get the new sum by subtracting previous value and adding new value to previous sum.
            // It will reduce the unnecessary loops
            newSum = n > 1 ? (sum - preValue + val) : val;

            if (newSum > maxSum) {
                maxSum = newSum;
            }
            sum = newSum;
        }
    }
    return maxSum;
}

/**
 * Build the test data
 */
const testScinarios = [
    {
        data: [[1, 2, 5, -20, 8, -10, 5], 2],
        result: 7
    },
    {
        data: [[-1, -2, -5, -20, -8, -10, -5], 2],
        result: -3
    },
    {
        data: [[1, 2, 5, 2, 8, 1, 5, 3], 2],
        result: 10
    },
    {
        data: [[1, 2, 5, 2, 8, 1, 5], 4],
        result: 17
    },
    {
        data: [[4, 2, 1, 6], 1],
        result: 6
    },
    {
        data: [[4, 2, 1, 6, 2], 4],
        result: 13
    },
    {
        data: [[], 4],
        result: null
    },

    {
        data: [[4, 2, 1, 6], 4],
        result: 13
    }
];

/**
 * Method to test the all scenarios
 */
function test() {
    let i = 0;
    let len = testScinarios.length;

    for (; i < len; i++) {
        let data = testScinarios[i].data;
        let result = testScinarios[i].result;

        const sum = maxSubarraySum.apply(this, data);
        console.log(`Test # ${i} `);
        console.log(`Data =>[${data[0]}]`);
        console.log(`Result => ${result},`, `Sum => ${sum}`);
        console.log(`Test ${sum === result ? '😀Pass' : '😡Failed'}`);
        console.log('=========================================')

    }
}

test();