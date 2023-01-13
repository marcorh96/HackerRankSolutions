import java.util.*;


class Result {

    /*
     * Complete the 'hurdleRace' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER k
     *  2. INTEGER_ARRAY height
     */

    public static int hurdleRace(int k, List<Integer> height) {
    // Write your code here
    int max = 0;
       for(Integer e : height){
            max = Math.max(max, e);
       }
       if(max<k){
           return 0;
       }
       return max-k;
       
    }

}