class Goblin:

    def __init__(self):
        self.name = 'test name'
        self.strength = 20
        self.speed = 70
        self.health = 50
        self.mana = 5
    
    def show_stats(self):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack( self , enemy ):
        enemy.health -= self.strength
        
    def damage_taken(self, damage):
        adjusted_damage = damage - self.armor
        self.health -= adjusted_damage
        print(f"{self.name} takes {adjusted_damage} damage, they now have {self.health} HP")

    def heal(self):
        self.health += self.mana
        print(f"{self.name} heals for {self.mana} they now have {self.health} HP")