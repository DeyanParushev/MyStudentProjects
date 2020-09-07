CREATE VIEW V_EmployeeNameJobTitle AS
	(SELECT 
		(CASE 
			WHEN MiddleName IS NULL THEN FirstName + ' ' + '' + ' ' + LastName
			ELSE FirstName + ' ' + MiddleName + ' ' + LastName 
		END) AS [Full Name], JobTitle
	FROM Employees);