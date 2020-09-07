SELECT TOP(5) Employees.EmployeeID
			, FirstName
			, (CASE 
				WHEN Projects.StartDate >= '2005' THEN NULL
				ELSE Projects.[Name]
				END) AS ProjectName
	FROM Employees
	JOIN EmployeesProjects ON Employees.EmployeeID = EmployeesProjects.EmployeeID
	JOIN Projects ON EmployeesProjects.ProjectID = Projects.ProjectID
	WHERE Employees.EmployeeID = 24
	ORDER BY Employees.EmployeeID
