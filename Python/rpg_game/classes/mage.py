from classes.elf import Elf 

class Mage(Elf): 
    def __init__(self,name): 
        super().__init__() 
        self.speed = 10 
        self.mana = 100 
        self.intelligence = 100 
        self.name = name

    def nuke(self, target): 
        print(f"the mage uses all of their {self.intelligence} intelligence and their enemy is obliterated")
        self.intelligence -= 50 
        target.health -= 100 

    def stretching(self): 
        print (f"the mage touched their toes and regained {self.speed} (Speed + 10)")
        self.speed += 10


