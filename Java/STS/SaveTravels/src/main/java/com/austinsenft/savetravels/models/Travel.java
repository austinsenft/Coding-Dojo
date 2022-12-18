package com.austinsenft.savetravels.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity 
@Table(name = "travels")
public class Travel {
	// Member Variables 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; 
	
	// @Size(min=3, max=100, message="CUSTOM MESSAGE FOR FULL NAME")
	// @NotNull for integers/numbers
	
	@NotEmpty
	private String expenseName; 
	
	@NotEmpty
	private String vendor; 
	
	@NotEmpty
	private String amount; 
	
	@NotEmpty
	private String description; 
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt; 
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt; 
	
	// Empty Constructor 
	public Travel() {}
	
	// Full Constructor 
	public Travel(String expenseName, String vendor, String amount, String description ) {
		this.expenseName = expenseName; 
		this.vendor = vendor; 
		this.amount = amount; 
		this.description = description; 
	}
	
	// Getters, Setters, Other Methods
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpenseName() {
		return expenseName;
	}

	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	

}
