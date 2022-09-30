
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = {
            "checking":BankAccount(int_rate = 0.07, balance = 100),
            "savings":BankAccount(int_rate =0.03, balance = 5000)}
    
    def make_deposit(self,amount,account):
        self.accounts[account].deposit(amount)
        return self

    def make_withdraw(self,amount,account): 
        self.accounts[account].withdraw(amount)
        return self

    def display_user_balance(self):
        for account in self.accounts:
            self.accounts[account].display_account_info()
        return self 
    

class BankAccount:

    @staticmethod
    def can_withdraw(balance,amount):
        if (balance - amount) < 0:
            return False
        else:
            return True
# static method so we can check sufficient funds 

    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
#constructor 

    def display_account_info(self): 
        print(f"{user1.name} Your Balance is {self.balance} and your interest rate is {self.int_rate}")
        return self 
# print to the console: eg. "Balance: $100"


    def deposit(self, amount):
        self.balance += amount
        return self
# increases the account balance by the given amount
        
    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance,amount):
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance = amount - 5
        return self
# decreases the account balance by the given amount if there are sufficient funds; 
# if there is not enough money, print a message 
# "Insufficient funds: Charging a $5 fee" and deduct $5

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * self.int_rate
        return self
# increases the account balance by the current 
# balance * the interest rate (as long as the balance is positive)


user1 = User('Austin', 'austinsenft@gmail.com')
user1.make_deposit(10,'checking').make_withdraw(4,'checking').display_user_balance()

