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
<title>Insert title here</title>
</head>
<body>
	<div class="container mt-5 justify-content-center border border-primary bg-info">
		<h3>
		In <c:out value="${sessionQuantity}" /> years,
		you will live in <c:out value="${sessionCity}" />
		with <c:out value="${sessionPerson}" /> as your roommate, 
		selling <c:out value="${sessionHobby}" /> for a living. 
		The next time you see a <c:out value="${sessionLivingthing}" />, 
		you will have good luck. Also, <c:out value="${sessionSomethingnice}" />
		
		</h3>
		
	</div>
	<div class="container">
	<a href=/omikuji>Go Back</a>	
	</div>
</body>
</html>