function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    arr.forEach(num => sum+=num);
    const sums = arr.map(n => sum - n);
    console.log(Math.min(...sums)+" "+Math.max(...sums))
}