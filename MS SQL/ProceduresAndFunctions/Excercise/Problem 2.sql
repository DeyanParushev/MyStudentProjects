CREATE PROC usp_GetEmployeesSalaryAboveNumber @borderSalary DECIMAL(18,4)
AS
BEGIN
	SELECT FirstName, LastName
		FROM Employees
		WHERE Salary >= @borderSalary
END

EXEC dbo.usp_GetEmployeesSalaryAboveNumber @borderSalary = 48100