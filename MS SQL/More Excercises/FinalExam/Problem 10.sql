SELECT TripId,
		   CASE WHEN MiddleName IS NULL THEN FirstName + ' ' + LastName
				ELSE FirstName + ' ' + MiddleName + ' ' + LastName END AS FullName,
		   Origin AS [From],
		   Cities.[Name] AS [To],
		   CASE WHEN CancelDate IS NOT NULL THEN 'Canceled'
				ELSE CONCAT(DATEDIFF(DAY, ArrivalDate, ReturnDate), ' days') END AS Duration
	FROM
		(SELECT Trips.Id AS TripId,
			   FirstName,
			   MiddleName,
			   LastName,
			   ArrivalDate,
			   ReturnDate,
			   CancelDate,
			   Cities.[Name] As Origin,
			   Hotels.CityId AS Destination
		FROM Trips
		JOIN AccountsTrips ON AccountsTrips.TripId = Trips.Id
		JOIN Accounts ON AccountsTrips.AccountId = Accounts.Id
		JOIN Rooms ON Trips.RoomId = Rooms.Id
		JOIN Hotels ON Rooms.HotelId = Hotels.Id
		JOIN Cities ON Accounts.CityId = Cities.Id) AS AggregatedData
JOIN Cities ON [Destination] = Cities.Id
ORDER BY FullName ASC,
		 TripId ASC