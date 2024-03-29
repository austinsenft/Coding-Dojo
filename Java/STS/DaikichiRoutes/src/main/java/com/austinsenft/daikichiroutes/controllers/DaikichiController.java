package com.austinsenft.daikichiroutes.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class DaikichiController {
    @RequestMapping("/")
    public String hello() {
            return "Hello World!";
    }
    
    @RequestMapping("/daikichi")
    public String welcome() {
            return "Welcome!";
    }
    
    @RequestMapping("/daikichi/today")
    public String fortuneToday() {
            return "Today you will find luck in all your endeavours!";
    }
    
    @RequestMapping("/daikichi/tomorrow")
    public String fortuneTomorrow() {
            return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }
    
    // Path Variables 
    
    // Travel to a city
    @RequestMapping("/daikichi/travel/{city}")
    public String travelCity(@PathVariable("city") String city) {
            return "Congratulations! You will soon travel to " + city ;
    }
    
    // Lottery with logic for odd or even
    @RequestMapping("/daikichi/lotto/{id}")
    public String lottery(@PathVariable("id") int id) {
            if (id % 2 == 0 ) {
            	return "You will take a grand journey in the near future, but be weary of tempting offers.";
    }
            	return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
    

    }
}


