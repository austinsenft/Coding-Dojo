
public class TestBankAccount {
	public static void main(String[] args) {
		
		
		BankAccount test = new BankAccount(100, 100);
		BankAccount derp = new BankAccount();
		
		// get balance
		System.out.println(test.getCheckingBalance());
		
		// withdrawal 
		test.withdrawalBalance(200);
		
		// deposit 
		test.depositChecking(30.5);
		
		// see totals checking and savings
		test.seeTotals(); 
		derp.seeTotals();
		
		// checking number of accounts created
		BankAccount.accountCount();
	}

}