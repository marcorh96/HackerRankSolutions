class Result{
public static int beautifulDays(int i, int j, int k) {
    // Write your code here
    int count = 0;
        for(int z = i; z<=j; z++){
            String str = Integer.toString(z);
            StringBuilder sb = new StringBuilder(str);
            str = sb.reverse().toString();
            int reversedNum = Integer.parseInt(str);
            int suma = Math.abs(z - reversedNum);
            if(suma % k == 0){
                count++;
            }
        }
        return count;
    }
}