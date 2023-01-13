
import java.util.*;

class Result {

    public static String angryProfessor(int k, List<Integer> a) {
    // Write your code here
        int count = 0;
        for(int studentTime : a){
            if(0 >= studentTime){
                count++;
            }
        }
        if(count >= k){
            return "NO";
        }
        return "YES";
    }

}
