package com.austinsenft.beltexam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.austinsenft.beltexam.models.Name;

@Repository
public interface NameRepository extends CrudRepository<Name, Long> {
	List<Name> findAll();
}
