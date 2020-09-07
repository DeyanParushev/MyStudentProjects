SELECT AccountId, 
	   FirstName + ' ' + LastName AS FullName,
	   LongestTrip,
	   ShortestTrip
FROM
	(SELECT AccountId, 
		   MAX(DATEDIFF(DAY, ArrivalDate, ReturnDate)) AS LongestTrip,
		   MIN(DATEDIFF(DAY, ArrivalDate, ReturnDate)) AS ShortestTrip
	FROM Trips
	JOIN AccountsTrips ON Trips.Id = AccountsTrips.TripId
	WHERE CancelDate IS NULL
	GROUP BY AccountId) AS GathereInfo
JOIN Accounts ON GathereInfo.AccountId = Accounts.Id
WHERE  MiddleName IS NULL
ORDER BY LongestTrip DESC,
		 ShortestTrip ASC