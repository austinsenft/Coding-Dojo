package com.austinsenft.savetravels.controllers;

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

import com.austinsenft.savetravels.models.Travel;
import com.austinsenft.savetravels.services.TravelService; 

@Controller
public class TravelController {

	// Import Service / Dependency Injection
	@Autowired 
	TravelService travelServ; 
	

		// View All 
		@GetMapping("/expenses")
		public String newExpense(
			Model model,
			@ModelAttribute("expenseObj") Travel form
		) {
			model.addAttribute("allTravels", travelServ.getAllTravels());
			return "index.jsp";
		}
		
		// View One
		@GetMapping("/expenses/{id}")
		public String showOne(
			@PathVariable("id") Long travelId,
			Model model
		) {
			// RETRIEVE ONE USER FROM DB
			Travel oneTravel = travelServ.findTravel(travelId);
			
			// PASS THE INFORMATION TO THE JSP
			model.addAttribute("travel", oneTravel);
		
			return "viewone.jsp";
		}
		
		
		// Create
		@PostMapping("/expenses/new")
		public String processExpense(
			Model model,
			@Valid @ModelAttribute("expenseObj") Travel form,
			BindingResult results
		) {
			if(results.hasErrors()) {
				model.addAttribute("allTravels", travelServ.getAllTravels());
				return "index.jsp";
			}
			travelServ.create(form);
			return "redirect:/expenses";
		}
		
		
		// Update 
		@GetMapping("/expenses/{id}/edit")
		public String editExpense(
			@PathVariable("id") Long travelId, Model model
		) {
			// GRAB ONE USER FROM DB
			Travel oneTravel = travelServ.findTravel(travelId);
			// PASS ONE USER TO JSP
			model.addAttribute("expenseObj", oneTravel);
			return "edit.jsp";
		}
		@PutMapping("/expenses/{id}/edit")
		public String updateExpense(
			@Valid @ModelAttribute("expenseObj") Travel form,
			BindingResult results
		) {
			if(results.hasErrors()) {
				return "edit.jsp";
			}
			travelServ.create(form);
			return "redirect:/expenses";
		}
		
		
		// Delete 
		@DeleteMapping("/expenses/{id}")
		public String deleteExpense(@PathVariable("id") Long travelId) {
			travelServ.deleteTravel(travelId);
			return "redirect:/expenses";
		}

		
}
