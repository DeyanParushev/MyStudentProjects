SELECT TOP(10) Id,
			   [Name],
			   CollectedData.CountryCode,
			   Accounts
FROM
	(SELECT CityId,
			CountryCode,
			COUNT(*) AS Accounts
	FROM Cities
	JOIN Accounts ON Accounts.CityId = Cities.Id
	GROUP BY CityId, CountryCode) AS CollectedData
JOIN Cities ON CollectedData.CityId = Cities.Id
ORDER BY Accounts DESC