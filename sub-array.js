function maxSubarraySum(arr, num) {
    if (num > arr.length || num <= 0) return null;

    let max = 0;
    let temp = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }

    return max;
}

module.exports = {
    maxSubarraySum,
};
