function breakingRecords(scores) {
    // Write your code here
    let maxScore = scores[0];
    let lowestScore = scores[0];
    let countMax = 0;
    let countMin = 0;
    scores.forEach(score =>{
        if(score > maxScore){
            countMax++;
            maxScore = score;
        }
        if(score < lowestScore){
            countMin++;
            lowestScore = score;
        }
    })
    return([countMax, countMin]);
}