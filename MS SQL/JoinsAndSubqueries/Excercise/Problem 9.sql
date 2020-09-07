SELECT e.EmployeeID
	  ,e.FirstName
	  ,e.ManagerID
	  ,em.FirstName AS ManagerName
	FROM Employees e
	JOIN Employees em ON e.ManagerID = em.EmployeeID
	WHERE e.ManagerID IN (3, 7)
	ORDER BY e.EmployeeID ASC
