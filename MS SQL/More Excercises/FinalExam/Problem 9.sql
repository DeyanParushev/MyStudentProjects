SELECT Id,
	   Email,
	   CitY,
	   COUNT(*) AS Trips
FROM
	(SELECT Accounts.Id AS [Id],
		   Email,
		   Cities.[Name] AS [City]
	FROM Accounts
	JOIN AccountsTrips ON AccountsTrips.AccountId = Accounts.Id
	JOIN Trips ON AccountsTrips.TripId = Trips.Id
	JOIN Rooms ON Trips.RoomId = Rooms.Id
	JOIN Hotels ON Rooms.HotelId = Hotels.Id
	JOIN Cities ON Hotels.CityId = Cities.Id
	WHERE Accounts.CityId = Hotels.CityId) AS AgregatedAndSummedData
GROUP BY Id, Email, City
ORDER BY Trips DESC,
		 Id ASC