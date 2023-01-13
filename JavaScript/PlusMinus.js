function plusMinus(arr) {
    // Write your code here
    let sumPositive = 0, sumNegative = 0, sumZero = 0;
    arr.forEach(num =>{
        if (num>0) sumPositive ++;
        if(num<0) sumNegative ++;
        if (num ===0) sumZero++;
            
    })
    console.log((sumPositive/arr.length).toFixed(6));
    console.log((sumNegative/arr.length).toFixed(6));
    console.log((sumZero/arr.length).toFixed(6));
}