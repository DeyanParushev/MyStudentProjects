CREATE PROC usp_GetTownsStartingWith @townStartingString NVARCHAR(20)
AS
BEGIN
	SELECT [Name]
		FROM Towns
		WHERE [Name] LIKE @townStartingString + '%'
END

EXEC usp_GetTownsStartingWith @townStartingString = 'b'