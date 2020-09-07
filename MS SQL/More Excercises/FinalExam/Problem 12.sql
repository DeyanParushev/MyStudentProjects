CREATE PROCEDURE usp_SwitchRoom(@TripId INT , @TargetRoomId INT)
AS 
BEGIN
	DECLARE @TripRoomHotelId INT;
	DECLARE @TargetRoomBeds INT;
	DECLARE @TripPeople INT;
	DECLARE @TargetRoomHotel INT;

	SELECT @TripPeople = COUNT(*)
	FROM AccountsTrips
	WHERE TripId = @TripId
	GROUP BY TripId

	SELECT @TripRoomHotelId = Rooms.HotelId
	FROM Trips
	JOIN Rooms ON Trips.RoomId = Rooms.Id
	WHERE Trips.Id = @TripId
	
	SELECT @TargetRoomBeds = Rooms.Beds,
			@TargetRoomHotel = Rooms.HotelId
	FROM Rooms
	WHERE Rooms.Id = @TargetRoomId AND Rooms.HotelId = @TripRoomHotelId

	IF(@TripRoomHotelId <> @TargetRoomHotel)
		THROW 50001, 'Target room is in another hotel!', 1
	ELSE IF (@TargetRoomBeds < @TripPeople)
		THROW 50002, 'Not enough beds in target room!', 1
	ELSE
		BEGIN 
			UPDATE Trips
			SET RoomId = @TargetRoomId
			WHERE Trips.Id = @TripId
		END
END

EXEC usp_SwitchRoom 10, 11
SELECT RoomId FROM Trips WHERE Id = 10
EXEC usp_SwitchRoom 10, 7
EXEC usp_SwitchRoom 10, 8
