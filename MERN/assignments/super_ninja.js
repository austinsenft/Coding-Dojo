class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name, this.health, this.strength, this.speed);
    }
    drinkSake() {
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats(); 


class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10, wisdom);
    }
    speakWisdom() {
        super.drinkSake();
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        );
    }
    showStats() {
        super.showStats();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();