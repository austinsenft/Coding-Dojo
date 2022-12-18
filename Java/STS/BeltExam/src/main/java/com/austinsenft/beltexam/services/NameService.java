package com.austinsenft.beltexam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austinsenft.beltexam.models.Name;
import com.austinsenft.beltexam.repositories.NameRepository;

@Service
public class NameService {
	
	@Autowired
	NameRepository nameRepo;
	
	// CREATE & UPDATE
	public Name create(Name newName) {
		return nameRepo.save(newName);
	}
	
	// READ ONE
	public Name getOne(Long id) {
		return nameRepo.findById(id).orElse(null);
	}
	
	// READ ALL
	public List<Name> getAll(){
		return nameRepo.findAll();
	}
	
	// DELETE
	public void deleteOne(Long id) {
		nameRepo.deleteById(id);
	}
}
