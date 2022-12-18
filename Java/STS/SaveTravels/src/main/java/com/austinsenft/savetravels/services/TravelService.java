package com.austinsenft.savetravels.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austinsenft.savetravels.models.Travel;
import com.austinsenft.savetravels.repositories.TravelRepository;

@Service
public class TravelService {

	// Import Repository 
	@Autowired 
	TravelRepository travelRepo; 
	
	// Create
	public Travel create(Travel newTravel) {
		return travelRepo.save(newTravel);
	}
	
	// Get All 
	public List<Travel> getAllTravels() {
		return travelRepo.findAll();
	}
	
	// Get One
	public Travel findTravel(Long  id) {
		return travelRepo.findById(id).orElse(null);
	}
	
	// Update 
	public Travel updateTravel(@Valid Travel updatedTravel) {
		return travelRepo.save(updatedTravel); 
	}
	
	// Delete 
	public void deleteTravel(Long id) {
		travelRepo.deleteById(id);
	}
}
