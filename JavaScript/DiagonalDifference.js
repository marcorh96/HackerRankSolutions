function diagonalDifference(arr) {
    // Write your code here
    let left = 0, right = 0;
    arr.forEach((num, i) => {
        left += arr[i][i];
        right += arr[i][arr[0].length - 1 - i];
    })

    return Math.abs(left - right);
}