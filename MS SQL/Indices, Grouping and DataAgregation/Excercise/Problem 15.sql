SELECT  DepartmentID, ManagerID, Salary
	INTO #Temp 
	FROM Employees 
	WHERE Salary > 30000

DELETE FROM #Temp
WHERE ManagerID = 42

UPDATE #Temp
SET Salary = Salary + 5000
WHERE DepartmentID = 1

SELECT DepartmentID, AVG(Salary) AS AverageSalary
	FROM #Temp
	GROUP BY DepartmentID
