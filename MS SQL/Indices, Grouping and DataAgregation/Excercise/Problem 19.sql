SELECT TOP(10) FirstName, LastName, DepartmentID
	FROM Employees AS e
	WHERE Salary > (SELECT AVG(Salary)
					FROM Employees AS em
					WHERE em.DepartmentID = E.DepartmentID)
	ORDER BY e.DepartmentID
		
		
