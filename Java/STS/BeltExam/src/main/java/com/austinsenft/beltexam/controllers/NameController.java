package com.austinsenft.beltexam.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.austinsenft.beltexam.models.Name;
import com.austinsenft.beltexam.models.User;
import com.austinsenft.beltexam.services.NameService;
import com.austinsenft.beltexam.services.UserService;

@Controller
public class NameController {
	@Autowired
	NameService nameServ;
	@Autowired
	UserService userServ; 
	
	// ----------- READ ALL ---------------//
	@GetMapping("/home")
	public String index(
		HttpSession session, Model model
	) {
		
		if(session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		// ADD BABY NAMES
		
		model.addAttribute("allNames", nameServ.getAll());
		// GRAB THE LOGGED IN USER'S ID
		Long user_id = (Long) session.getAttribute("user_id");
		
		// GRAB THE USER OBJECT FROM DB AND PASS TO JSP
		model.addAttribute("loggedUser", userServ.getOneUser(user_id));
		
		
		return "dashboard.jsp";
	}
	
	// ---------- CREATE -----------------//
	
	@GetMapping("/names/new")
	public String newName(
		@ModelAttribute("nameObj") Name emptyName,
		HttpSession session
	) {
		if(session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		return "new.jsp";
	}
	
	@PostMapping("/names/new")
	public String processName(
		@Valid @ModelAttribute("nameObj") Name filledName,
		BindingResult results
	) {
		// VALIDATIONS FAIL
		if(results.hasErrors()) {
			return "new.jsp";
		}
		Name newName = nameServ.create(filledName);
		return "redirect:/home";
//		return "redirect:/recipes/" + newRecipe.getId();
	}
	// ---------- CREATE -----------------//
	
	// ---------- READ ONE --------------//
	@GetMapping("/names/{id}")
	public String oneName(
		@PathVariable("id") Long id,
		HttpSession session,
		Model model
	) {
		if(session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		
		// GRAB THE LOGGED IN USER'S ID
		Long user_id = (Long) session.getAttribute("user_id");
		
		// GRAB THE USER OBJECT FROM DB AND PASS TO JSP
		model.addAttribute("loggedUser", userServ.getOneUser(user_id));
		
		model.addAttribute("oneName", nameServ.getOne(id) );
		return "details.jsp";
	}
	// ---------- READ ONE --------------//
	
	// ---------- UPDATE --------------//
	@GetMapping("/names/{id}/edit")
	public String edit(
		@PathVariable("id") Long id,
		Model model
	) {
		model.addAttribute("nameObj", nameServ.getOne(id));
		return "edit.jsp";
	}
	@PutMapping("/names/{id}/edit")
	public String update(
		@Valid @ModelAttribute("nameObj") Name filledName,
		BindingResult results
	) {
		if(results.hasErrors()) {
			return "edit.jsp";
		}
		nameServ.create(filledName);
		return "redirect:/home";
	}
	// ---------- UPDATE --------------//
	
	// ---------- DELETE --------------//
	@GetMapping("/names/{id}/delete")
	public String delete(
		@PathVariable("id") Long id
	) {
		nameServ.deleteOne(id);
		return "redirect:/home";
	}
	@DeleteMapping("/names/{id}")
	public String deleteName(
		@PathVariable("id") Long id
	) {
		nameServ.deleteOne(id);
		return "redirect:/home";
	}
	// ---------- DELETE --------------//
}