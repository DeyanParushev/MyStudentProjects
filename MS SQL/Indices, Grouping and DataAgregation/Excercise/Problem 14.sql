SELECT DepartmentID, MIN(Salary) AS MinimumSalary
   FROM	Employees
   WHERE HireDate > '01-01-2000'
   GROUP BY DepartmentID
   HAVING DepartmentID IN (2, 5, 7)
   ORDER BY DepartmentID