SELECT *
	FROM
		(SELECT EmployeeID, FirstName, LastName, Salary, 
		(DENSE_RANK() OVER(PARTITION BY Salary ORDER BY EmployeeID)) AS [Rank] 
		FROM Employees
		WHERE Salary >= 10000 AND Salary <= 50000
		) AS temp
	WHERE [Rank] = 2
	ORDER By Salary DESC

