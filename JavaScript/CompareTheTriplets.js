function compareTriplets(a, b) {
    let countAlice = 0;
    let countBob = 0;
    a.forEach((num, i) =>{
       if(a[i] > b[i]) countAlice++;
       if(a[i] < b[i]) countBob++;
    });
    return [countAlice, countBob];
    
}