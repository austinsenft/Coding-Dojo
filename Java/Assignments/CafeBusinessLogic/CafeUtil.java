import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil {
    
    public int getStreakGoal(int numWeeks) {
        int num = 0;
        for (int i = 1; i <= numWeeks; i++) {
            num += i ; 
        }
        return num; 
    }


    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (int i = 0; i < prices.length; i++) {
            sum += prices[i];
        }
        return sum; 
    }


    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println(i + " " + menuItems.get(i)) ;
            // System.out.println(menuItems.get(i));
        }
        
    }


    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello " + userName + ",\r\n" + "There are " + (customers.size())+ " people ahead of you.");
        customers.add(userName);
        System.out.println(customers);
        // return customers;
    }
    
}
