SELECT TOP(5) EmployeeID, FirstName, Salary, Departments.[Name]
	FROM Employees
	JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
	WHERE Salary > 15000
	ORDER BY Departments.DepartmentID ASC