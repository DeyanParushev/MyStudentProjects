CREATE PROCEDURE usp_FindByExtension(@extension NVARCHAR(20))
AS
BEGIN
	SELECT Id,
		   [Name],
		   CONVERT(NVARCHAR(50), Size) + 'KB' AS [Size]
		FROM Files
		WHERE SUBSTRING([Name], CHARINDEX('.', [Name]) + 1, LEN([Name]) - CHARINDEX('.', [Name])) = @extension
		ORDER BY Id ASC,
				 [Name] ASC,
				 Size DESC
END

EXECUTE usp_FindByExtension 'txt'