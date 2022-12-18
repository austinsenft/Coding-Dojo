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
<title>Home</title>
</head>
<body>
	<div class="container">
		<div class="d-flex justify-content-space-between">
		<h1>Hello, ${loggedUser.userName}. Here are some name suggestions...</h1>
		<a href="/logout">Logout</a>
		</div>
		
		
		<div>
		<table class="table">
			<thead class="table-dark">
				<tr>
					<th>Baby Names</th>
					<th>Gender</th>
					<th>Origin</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="babyname" items="${allNames}">
					<tr>
						<td>
							<a href="/names/${babyname.id}">						
								<c:out value="${babyname.name}" />
							</a>
							
						</td>
						<td><c:out value="${babyname.gender}" /></td>
						<td><c:out value="${babyname.origin}" /></td>
						
					</tr>
				</c:forEach>
			</tbody>
		</table>
		</div>
		
		<a href="/names/new" class="btn btn-success"> New Name</a>
		
	</div>
</body>
</html>