SELECT TOP (50) FirstName, LastName, Towns.Name, a.AddressText
	FROM Employees
	JOIN Addresses AS a ON Employees.AddressID = a.AddressID
	JOIN Towns ON a.TownID = Towns.TownID
	ORDER BY FirstName ASC, LastName ASC