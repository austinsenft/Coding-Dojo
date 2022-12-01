package com.austinsenft.zookeeper;

public class Gorilla extends Mammal {
	// Member Variables
	
	
	// Constructors
	// Empty Constructor 
	public Gorilla() {
		super();
	}
	
	// Full Constructor
	public Gorilla(double energyLevel) {
		super(energyLevel);
	}
	
	
	// Getters, Setters, Other Methods 
	
	// Throw Things
	public void throwThings() {
		System.out.println("Eat this!"); 
		super.setEnergyLevel(energyLevel -= 5);
	}
	
	// Eat Bananas 
	public void eatBananas(){
		System.out.println("Yum!"); 
		super.setEnergyLevel(energyLevel += 10);
	}
	
	// Climb 
	public void climb() {
		System.out.println("Watch me climb this right quick");
		super.setEnergyLevel(energyLevel -= 10); 
	}

	
	
	
}