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
<title>Save Travels</title>
</head>
<body>
	<div class="container">
		<h1 class="mt-4">Save Travels</h1>
		<table class="table">
			<thead class="table-dark">
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="travel" items="${allTravels}">
					<tr>
						<td>
							<a href="/expenses/${travel.id}">						
								<c:out value="${travel.expenseName}" />
							</a>
							
						</td>
						<td><c:out value="${travel.vendor}" /></td>
						<td><c:out value="${travel.amount}" /></td>
						
						<td class="d-flex gap-3">
						
							<form action="/expenses/${travel.id}" method="POST">
								<input type="hidden" name="_method" value="delete">
								<button class="btn btn-danger">Delete</button>
							</form>
							
							<a class="btn btn-warning" href="/expenses/${travel.id}/edit">Edit</a>
						</td>
						
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		<h1>Add An Expense</h1>
		<form:form modelAttribute="expenseObj" method="POST" action="/expenses/new" >
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
			<button class="btn btn-success">Submit</button>
		</form:form>
	</div>
</body>
</html>