
class Solution {

    // Complete the catAndMouse function below.
    static String catAndMouse(int x, int y, int z) {
       int a = Math.abs(x-z);
       int b = Math.abs(y-z);
       if(a<b){
           return "Cat A";
       }else if(a>b){
           return "Cat B";
       }
       return "Mouse C";
    }
}