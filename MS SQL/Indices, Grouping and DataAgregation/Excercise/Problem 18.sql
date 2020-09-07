SELECT DepartmentID, AVG(Salary) 
FROM 
	(SELECT	
	DepartmentID,
	Salary,
	DENSE_RANK() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS SalaryRank
	FROM Employees) AS FullInfo
WHERE SalaryRank = 3
GROUP BY DepartmentID
ORDER BY DepartmentID
		
	