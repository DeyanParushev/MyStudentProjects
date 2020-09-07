UPDATE Employees
SET Salary = Salary * 1.12
WHERE Employees.DepartmentID IN (1, 2, 4, 11);