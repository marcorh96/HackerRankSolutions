import java.util.*;

class Result {
    public static int divisibleSumPairs(int n, int k, List<Integer> ar) {
    // Write your code here
        int count = 0;
        for(int i = 0; i<n;i++){
           for(int z = i+1; z<n; z++){
               if((ar.get(i) + ar.get(z)) % k == 0){
                   count++;
               }
           }
        }
        return count;
    }

}
