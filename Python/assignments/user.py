
class User: 

    def __init__(self, first_name, last_name, email, age):
        # attributes passed in as arguments
        self.first_name = first_name
        self.last_name = last_name 
        self.email = email 
        self.age = age
        # default attributes 
        self.is_rewards_member = False 
        self.gold_card_points = 0 

    def display_info(self): 
        print(f"{self.first_name}, {self.last_name}, {self.email}, {self.age}, {self.is_rewards_member}")
        return self

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200
        print('I am now a member')
        return self  
        


    def spend_points(self,amount):
        self.gold_card_points = self.gold_card_points * (1 - amount)
        print(f"I have {amount} less points")
        return self

user = User('Austin','Senft','austinsenft@gmail.com', '27') 
user.display_info().enroll().spend_points(50) 


user2 = User('Fake','Name', 'fakename@gmailcom', '31')
user2.display_info().spend_points(80)



        

