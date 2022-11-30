
public class BankAccount {
	// Member Variables, Attributes
    private double checkingBalance;
    private double savingsBalance;
    
    // Static (Class) Variables
    private static int numberOfAccounts = 0;
    private static int totalMoneys = 0;
    

    // Constructor Methods
    
    // Empty Constructor
    public BankAccount(){
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        numberOfAccounts++;
    }

    // Full Constructor
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance; 
        numberOfAccounts++;
    }
    
    
    // Getters 
    public double getCheckingBalance(){
        return this.checkingBalance;
    }
    
    public double getSavingsBalance(){
        return this.savingsBalance;
    }
    
    
    // Setters
    // Do I need Setters for this assignment??
    
    // Static Methods
    public static int accountCount(){
        System.out.println(numberOfAccounts);
        return numberOfAccounts;
    }
    
    public static int totalMoneys(){
    	System.out.println(totalMoneys);
    	return totalMoneys;
    }
    
    
    // Deposit Into Checking
    public void depositChecking(double amount){
        this.checkingBalance += amount ;
        totalMoneys += amount;
    }
    
    // Deposit Into Savings
    public void depositSavings(double amount){
        this.savingsBalance += amount ;
        totalMoneys += amount;
    }
    
    // Withdrawal From One Balance - Checking
    public void withdrawalBalance(double amount){
    	if (this.checkingBalance >= amount) {
    		this.checkingBalance -= amount; 
    	}
    	System.out.println("Insufficient Funds");
    }
    
    // See Total From Checking and Savings 
    public void seeTotals(){
    	System.out.println("Your Checking Account Has:");
    	System.out.println(getCheckingBalance());
    	System.out.println("Your Savings Account Has:");
    	System.out.println(getSavingsBalance());
    	
    }
}

