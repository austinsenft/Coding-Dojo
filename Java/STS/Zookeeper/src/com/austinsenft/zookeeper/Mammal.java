package com.austinsenft.zookeeper;

public class Mammal {
	protected double energyLevel = 100;
	

	// Empty Constructor 
	public Mammal() {
		this.energyLevel = 100; 
	}
	
	// Full Constructor 
	public Mammal(double energyLevel) {
		this.energyLevel = energyLevel;
	}
	
	// Getters, Setters, Other Methods 

	public double getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(double energyLevel) {
		this.energyLevel = energyLevel;
	}
	
	public void displayEnergy() {
		System.out.println(energyLevel);
	}
}
