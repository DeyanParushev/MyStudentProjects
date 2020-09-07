SELECT AccountId, 
	   MAX(DATEDIFF(DAY, ArrivalDate, ReturnDate)) AS LongestTrip,
	   MIN(DATEDIFF(DAY, ArrivalDate, ReturnDate)) AS ShortestTrip
FROM Trips
JOIN AccountsTrips ON Trips.Id = AccountsTrips.TripId
JOIN Accounts ON AccountsTrips.AccountId = Accounts.Id
WHERE CancelDate IS NOT NULL AND MiddleName IS NOT NULL
GROUP BY AccountId
ORDER BY LongestTrip DESC,
		 ShortestTrip ASC