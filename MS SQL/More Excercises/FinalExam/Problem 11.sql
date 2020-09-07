CREATE OR ALTER FUNCTION udf_GetAvailableRoom(@HotelId INT, @Date DATE, @People INT)
RETURNS NVARCHAR(200)
AS 
BEGIN
	DECLARE @ReturnValue NVARCHAR(200);
	DECLARE @TotalPrice DECIMAL(15, 2);
	DECLARE @HotelRate DECIMAL(15, 2);
	DECLARE @RoomPrice DECIMAL(15, 2);
	DECLARE @RoomType NVARCHAR(30);
	DECLARE @RoomId INT;
	DECLARE @RoomBeds INT;

	IF EXISTS( SELECT TOP(1) *
				FROM
					(SELECT Hotels.BaseRate,
							Rooms.Price,
							Hotels.Id AS HotelId,
							Rooms.Beds, 
							Rooms.Id AS RoomId,
							ArrivalDate,
							ReturnDate,
							CancelDate
					FROM Hotels
					JOIN Rooms ON Hotels.Id = Rooms.HotelId
					JOIN Trips ON Rooms.Id = Trips.RoomId) AS GatheredData
					WHERE HotelId = @HotelId AND GatheredData.Beds >= @People AND (ArrivalDate > @Date OR ReturnDate < @Date)
				ORDER BY Price DESC)
		BEGIN
			SELECT TOP(1) @HotelRate = Sorted.BaseRate,
						  @RoomPrice = Sorted.Price,
						  @RoomType = Sorted.[Type],
						  @RoomId = Sorted.RoomId,
						  @RoomBeds = Sorted.Beds
			FROM
				(SELECT TOP(1) *
					FROM
						(SELECT Hotels.BaseRate,
								Rooms.Price,
								Hotels.Id AS HotelId,
								Rooms.Beds, 
								Rooms.Id AS RoomId,
								ArrivalDate,
								ReturnDate,
								CancelDate,
								Rooms.Type
						FROM Hotels
						JOIN Rooms ON Hotels.Id = Rooms.HotelId
						JOIN Trips ON Rooms.Id = Trips.RoomId) AS GatheredData
						WHERE HotelId = @HotelId AND GatheredData.Beds >= @People AND (ArrivalDate > @Date OR ReturnDate < @Date)
					ORDER BY Price DESC) AS Sorted

			SET @TotalPrice = (@HotelRate + @RoomPrice) * @People;
			SET @ReturnValue = 'Room ' + CONVERT(NVARCHAR, @RoomId) + ': '+ CONVERT(NVARCHAR, @RoomType) + ' ('+ CONVERT(NVARCHAR, @RoomBeds) +' beds) - $' + CONVERT(NVARCHAR, @TotalPrice)
		END
	ELSE
		BEGIN
			SET @ReturnValue = 'No rooms available'
		END
	RETURN @ReturnValue
END

SELECT DBO.udf_GetAvailableRoom (112, '2011-12-17', 2)
SELECT dbo.udf_GetAvailableRoom(94, '2015-07-26', 3)