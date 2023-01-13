//Challenge Anagram HackerRank with JS

function anagram(s) {
    // Write your code here
    if(s.length % 2 == 1) return -1;
    const mitad1 = s.slice(0, s.length / 2).split("").sort();
    const mitad2 = s.slice(s.length / 2).split("").sort();
    console.log(mitad1, mitad2);
    for(let i = 0; i<s.length/2; i++){
        if(mitad2.indexOf(mitad1[i]) >= 0){
            mitad2.splice(mitad2.indexOf(mitad1[i]), 1);
        }
    }
    return mitad2.length;
}