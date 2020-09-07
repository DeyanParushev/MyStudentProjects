SELECT FirstName,
	   LastName,
	   CONVERT(VARCHAR, Birthdate,  110) AS Birthdate,
	   Cities.[Name] AS Hometown,
	   Email
FROM Accounts
JOIN Cities ON Accounts.CityId = Cities.Id
WHERE Email LIKE 'e%'
ORDER BY Cities.Name