function birthdayCakeCandles(candles) {
    // Write your code here
    const maxNumber = Math.max(...candles);
    let sum = 0;
    candles.forEach(candle =>{
        if(candle === maxNumber) sum++;
    })
    return sum;
}