from classes.goblin import Goblin 

class Rogue(Goblin): 
    def __init__(self, name):
        super().__init__() 
        self.speed = 90
        self.stealth = 99  
        self.name = name

    def shank(self, enemy): 
        print(f"{enemy.name} has been shanked")
        enemy.health -= 20
        print(f"your health is now {enemy.health}")

    def hide(self): 
        print(f"you scurry into the shadows") 


