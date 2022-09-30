from classes.rogue import Rogue
from classes.mage import Mage

import random

player_1 = Mage("Hoity-Toity")
enemy = Rogue("Shankerson")


print("Welcome to the game!")
while( player_1.health > 0 and enemy.health > 0):
    response =""
    while not response == "1" and not response == "2":
        print(f"You are the Mage, will you \n 1)nuke \n 2)stretch \n 3)attack")       
        response = input(">>>") 

    # PLAYER 
        if response == "1":
            player_1.nuke(enemy)
        elif response == "2":
            player_1.stretching()
        elif response == "3": 
            player_1.attack(enemy)
        else:
            print("please select a valid option")

    # ENEMY 
    enemy_action = random.randint(1,2)
    if enemy_action == 1:
        enemy.shank(player_1)
    if enemy_action == 2:
        enemy.heal()

if enemy.health < 0: 
        enemy.health == 1
        print(f"the rogue uses their cheat death and survives with 1 HP. the rogue runs away")
else:
    print(f"The sneaky rogue has fallen") 

