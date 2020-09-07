SELECT TOP(50)	 e.EmployeeID
				 ,CONCAT(e.FirstName, ' ', e.LastName) AS EmployeeName
				 ,CONCAT(em.FirstName,' ', em.LastName)  AS ManagerName
				 ,Departments.[Name]
	FROM Employees e
	JOIN Employees em ON e.ManagerID = em.EmployeeID
	JOIN Departments ON e.DepartmentID = Departments.DepartmentID
	ORDER BY e.EmployeeID ASC
