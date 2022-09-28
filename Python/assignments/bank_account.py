
class BankAccount:
    
    all_accounts = []
# so we can loop through all accounts 

    # @classmethod
    # def all_account_details(cls):
    #     for account in cls.all_accounts:
    #         print(BankAccount.display_account_info)
        
# use a classmethod to print all instances of a Bank Account's info

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
        print(f"Your Balance is {self.balance} and your interest rate is {self.int_rate}")
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

account = BankAccount(.07,100)
account.deposit(20).deposit(100).deposit(140).withdraw(100).yield_interest().display_account_info()


account2 = BankAccount(.09,0) 
account2.deposit(10).deposit(103).withdraw(10).withdraw(20).withdraw(10).withdraw(14).yield_interest().display_account_info()

# BankAccount.all_account_details() 
# see why this is not working. how do i get class method called
# and how would i print all accounts and their info