CREATE PROC usp_GetEmployeesSalaryAbove35000
AS
BEGIN 
	SELECT FirstName, LastName
		FROM Employees
		WHERE Salary > 35000
END

EXEC DBO.usp_GetEmployeesSalaryAbove35000
