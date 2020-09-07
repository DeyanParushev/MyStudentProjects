


SELECT FirstName, LastName, dbo.ufn_GetSalaryLevel(Salary) AS SalaryLevel
	FROM Employees