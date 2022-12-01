package com.austinsenft.zookeeper;

public class GiantBat extends Mammal {
	// Member Variables

	
	// Constructors 
	// Empty Constructor 
	public GiantBat() {
		super(); 
		this.energyLevel = 300; 
	}
	
	// Full Constructor 
	public GiantBat(double energyLevel) {
		this.energyLevel = energyLevel;
	}
	
	// Getters, Setters, Other Methods 
	
	// Attack Towns 
	public void attackTown() {
		System.out.println("Hahahahha burn lowly humans!"); 
		super.setEnergyLevel(energyLevel -= 100);
	}
	
	// Eat Humans
	public void eatHumans() {
		System.out.println(" *CRUNCH CRUNCH CRUNCH* "); 
		super.setEnergyLevel(energyLevel += 25);
	}

	
	// Fly 
	public void fly() {
		System.out.println(" *FWOOP FWOOP FWOOP* "); 
		super.setEnergyLevel(energyLevel -= 50); 
	}
	
	

}