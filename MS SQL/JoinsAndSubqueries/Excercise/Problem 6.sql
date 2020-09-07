SELECT FirstName, LastName, HireDate, Departments.[Name] AS DeptName
	FROM Employees
	LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
	WHERE HireDate > CAST('1.1.1999' AS DATE) AND 
			Departments.[Name] IN ('Sales', 'Finance')
	ORDER BY HireDate ASC
