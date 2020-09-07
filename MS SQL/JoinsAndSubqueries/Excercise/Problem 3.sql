SELECT EmployeeID, FirstName, LastName, Departments.[Name] AS [DepartmentName]
	FROM Employees
	JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
	WHERE Departments.[Name] = 'Sales'
	ORDER BY EmployeeID ASC