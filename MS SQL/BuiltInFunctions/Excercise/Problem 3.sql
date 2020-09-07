SELECT FirstName
	FROM Employees
	WHERE DepartmentID IN (3, 10) 
		AND DATEPART(YEAR, HireDate) >= 1995 
		AND DATEPART(YEAR, HireDate) <= 2005
