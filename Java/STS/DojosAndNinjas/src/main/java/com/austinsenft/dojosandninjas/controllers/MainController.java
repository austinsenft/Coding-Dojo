package com.austinsenft.dojosandninjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.austinsenft.dojosandninjas.models.Dojo;
import com.austinsenft.dojosandninjas.models.Ninja;
import com.austinsenft.dojosandninjas.services.MainService;

@Controller
public class MainController {
	
	@Autowired
	MainService mainServ;
	
	
	// ---------------- CREATING A DOJO  -----------------//
	@GetMapping(value={"/", "/dojos/new"})
	public String createDojo(
		@ModelAttribute("dojoObj")Dojo emptyDojo
	) {
		return "CreateDojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String processDojo(
		@Valid @ModelAttribute("dojoObj")Dojo filledDojo,
		BindingResult results
	) {
		// VALIDATIONS FAIL
		if(results.hasErrors()) {
			return "CreateDojo.jsp";
		}
		// VALIDATIONS PASS
		mainServ.createDojo(filledDojo);
		return "redirect:/";
	}
	
	// ---------------- CREATING A NINJA -----------------//
	@GetMapping("/ninjas/new")
	public String createNinja(
		@ModelAttribute("ninjaObj") Ninja emptyNinjaObj,
		Model model
	) {
		model.addAttribute("allDojos", mainServ.getAllDojos());
		return "CreateNinja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String processNinja(
		@Valid @ModelAttribute("ninjaObj")Ninja filledNinja,
		BindingResult results,
		Model model
	) {
		// VALIDATIONS FAIL
		if(results.hasErrors()) {
			model.addAttribute("allNinjas", mainServ.getAllNinjas());
			return "CreateNinja.jsp";
		}
		// VALIDATIONS PASS
		mainServ.createNinja(filledNinja);
		return "redirect:/ninjas/new";
	}
	
	// ---------------- DISPLAY ONE DOJO -----------------//
	@GetMapping("/dojos/{id}")
	public String oneDojo(
		@PathVariable("id") Long dojoId,
		Model model
	) {
		Dojo oneDojo = mainServ.getOneDojo(dojoId);
		model.addAttribute("dojo", oneDojo);
		return "DojoShow.jsp";
	}
	
}
