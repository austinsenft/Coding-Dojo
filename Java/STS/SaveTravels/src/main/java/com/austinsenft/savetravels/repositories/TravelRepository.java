package com.austinsenft.savetravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.austinsenft.savetravels.models.Travel;



@Repository
public interface TravelRepository extends CrudRepository<Travel, Long> {
	// GET ALL METHOD
	List<Travel> findAll();
	
	// CUSTOM QUERIES

}