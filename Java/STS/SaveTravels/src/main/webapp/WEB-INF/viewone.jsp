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
<title>View Expense</title>
</head>
<body>
	<div class="container">
		
		<h1 class="mt-3">Expense Details</h1>
		
			<p>
				Expense Name: <c:out value="${travel.expenseName}" />
			</p>
			<p>
				Vendor: <c:out value="${travel.vendor}" />
			</p>
			<p>
				Amount: <c:out value="${travel.amount}" />
			</p>
			<p>
				Description:  <c:out value="${travel.description}" />
			</p>
			<p>
				<a class="btn btn-secondary" href="/expenses"> Go Back </a>
			</p>
	</div>
</body>
</html>