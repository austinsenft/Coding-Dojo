<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<title>Omikuji Form</title>
</head>
<body>
	<div class="container ">
	<div class="row justify-content-center">
	<div class="col p-3">
	
	<h1 class="text-center">Omikuji Form</h1>
	
		<form class="form-control flex-column d-flex" action="/omikuji" method="post">
		
			<div class="form-group mb-3">
				<label for="quantity">Choose any number between 5 and 25:</label>
				<input type="number" id="quantity" name="quantity" min="5" max="25">
			</div>
		
  			<div class="form-group mb-2">
    			<label for="city">Enter the name of any City</label>
    			<input type="text" name="city" class="form-control" id="city" >
  			</div>
  			
  			<div class="form-group mb-2">
    			<label for="person">Enter the name of any real person</label>
    			<input type="text" name="person" class="form-control" id="person" >
  			</div>
  			
  			 <div class="form-group mb-2">
    			<label for="hobby">Enter professional endeavor or hobby</label>
    			<input type="text" name="hobby" class="form-control" id="hobby" >
  			</div>
  			
  			 <div class="form-group mb-2">
    			<label for="livingthing">Enter any type of living thing</label>
    			<input type="text" name="livingthing" class="form-control" id="livingthing" >
  			</div>
  			
  			<div class="form-group">
    			<label for="somethingnice">Say something nice to someone</label>
    			<textarea  class="form-control" id="somethingnice" name="somethingnice" rows="4" cols="50"> 
    			</textarea>
    			
  			</div>
  			
  			<div class="form-group">
  				<p class="mt-2">Send and show a friend!</p>
  				<button type="submit" class="btn btn-primary">Send</button>
  			</div>
		</form>
	</div>
	</div>
	</div>
</body>
</html>