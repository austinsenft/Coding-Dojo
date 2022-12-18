package com.austinsenft.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	
	@GetMapping("/omikuji")
	public String index(Model model, HttpSession session) {
		model.addAttribute("quantity", session.getAttribute("sessionQuantity"));
		model.addAttribute("city", session.getAttribute("sessionCity"));
		model.addAttribute("person", session.getAttribute("sessionPerson"));
		model.addAttribute("hobby", session.getAttribute("sessionHobby"));
		model.addAttribute("livingthing", session.getAttribute("sessionLivingthing"));
		model.addAttribute("somethingnice", session.getAttribute("sessionSomethingnice"));
		return "index.jsp";
	}
	
	@GetMapping("/omikuji/show")
	public String show() {
		return "show.jsp";
	}

	@PostMapping("/omikuji")
	public String formSubmission(
		@RequestParam(value="quantity") int quantity,
		@RequestParam(value="city") String city, 
		@RequestParam(value="person") String person, 
		@RequestParam(value="hobby") String hobby, 
		@RequestParam(value="livingthing") String livingthing, 
		@RequestParam(value="somethingnice") String somethingnice, 
		HttpSession session	
		
		) {
		session.setAttribute("sessionQuantity", quantity);
		session.setAttribute("sessionCity", city);
		session.setAttribute("sessionPerson", person);
		session.setAttribute("sessionHobby", hobby);
		session.setAttribute("sessionLivingthing", livingthing);
		session.setAttribute("sessionSomethingnice", somethingnice);
		return "redirect:/omikuji/show";
	}
}
