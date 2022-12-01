package com.austinsenft.test;

import java.util.ArrayList;
import java.util.Date;
// SHIFT + CMD + o

import com.austinsenft.caresoftinterfaces.HIPAACompliantAdmin;
import com.austinsenft.caresoftinterfaces.HIPAACompliantUser;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {

	// Member Variables
	private Integer employeeID;
	private String role;
	private ArrayList<String> securityIncidents;
	
	// Constructor
    public AdminUser(Integer id, String role) {
    	super(id);
    	this.role = role;
    	this.securityIncidents = null; 
    }

 
    
    // TO DO: Implement a constructor that takes an ID and a role
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

	
    // Interface Implementation Methods 
    @Override
	public boolean assignPin(int pin) {
		// Pin must be 6 digits or more; returns false if not
		// Expected to assign the pin to the user (as a member variable)
		String pinString = Integer.toString(pin);
		if(pinString.length() < 6) {
			return false;
		}
		this.pin = pin;
		return true;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// Compares the ids, and if they are not a match,
		// creates an incident report using the authIncident method,
		// Returns true if ids match, false if not.
		
		if(this.id == confirmedAuthID) {
			return true;
		}
		else {
			if (this.getSecurityIncidents() == null) {
				ArrayList<String> Log = new ArrayList<String>();
				this.setSecurityIncidents(Log);
				this.authIncident();
				return false;
			}
			else {
				this.authIncident();
				return false; 
			}
		}
	}

	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return this.getSecurityIncidents();
	}


	// Getters and Setters
	public Integer getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
	
	

}
