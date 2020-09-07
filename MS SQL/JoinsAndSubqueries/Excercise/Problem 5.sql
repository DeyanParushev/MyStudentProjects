SELECT TOP(3) Employees.EmployeeID, FirstName 
	FROM Employees
	LEFT JOIN EmployeesProjects ON Employees.EmployeeID = EmployeesProjects.EmployeeID
	WHERE EmployeesProjects.EmployeeID IS NULL
