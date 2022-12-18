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
<title>New Name</title>
</head>
<body>
	<div class="container">
		<h1>Add a Name</h1>
		<form:form action="/names/new" method="post" modelAttribute="nameObj">
		<form:input type="hidden" path="creator" value="${user_id}" />
			<p>
				New Name:
				<form:input path="name" />
				<form:errors path="name" />
			</p>
			<p>
			Typical Gender
				<form:select path="gender">
					
						<form:option value="neutral">
							
						</form:option>
						<form:option value="male">
							
						</form:option>
						<form:option value="female">
							
						</form:option>
					
				
				</form:select>
				<form:errors path="gender" />
			</p>
			<p>
				Origin:
				<form:input path="origin" />
				<form:errors path="origin" />
			</p>
			<p>
				Meaning:
				<form:input  path="meaning" />
				<form:errors path="meaning" />
			</p>
			<button class="btn btn-success mb-3">Submit</button>
		</form:form>
		<a href="/home" class="btn btn-danger"> Cancel</a>
	</div>
</body>
</html>