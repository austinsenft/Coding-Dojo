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
<title>Edit Expense</title>
</head>
<body>
	<div class="container">
	
		<h1 class="mt-3">Edit Expense</h1>
		
		<%-- make sure to use expenseObj.id here for the action route path variable--%>
		<form:form modelAttribute="expenseObj" method="POST" action="/expenses/${expenseObj.id}/edit"> 
		
			<input type="hidden" name="_method" value="put">
			<p>
				Expense Name:
				<form:input type="text" path="expenseName"/>
				<form:errors path="expenseName" />
			</p>
			<p>
				Vendor:
				<form:input type="text" path="vendor" />
				<form:errors path="vendor" />
			</p>
			<p>
				Amount:
				<form:input type="text" path="amount" />
				<form:errors path="amount" />
			</p>
			<p>
				Description:
				<form:input type="text" path="description" />
				<form:errors path="description" />
			</p>
			<button class="btn btn-success mb-3">Submit</button>
		</form:form>
		<a class="btn btn-secondary" href="/expenses"> Go Back </a>
	</div>
</body>
</html>