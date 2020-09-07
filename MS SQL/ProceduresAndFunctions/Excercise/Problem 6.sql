CREATE OR ALTER FUNCTION ufn_IsWordComprised(@setOfLetters NVARCHAR(30), @word NVARCHAR(30))
RETURNS BIT
AS 
BEGIN 
	DECLARE @wordLength INT
	SET @wordLength = LEN (@word)
	
	DECLARE @index TINYINT
	SET @index = 1

	DECLARE @boolResult BIT
	SET @boolResult = 1

	WHILE (@index <= @wordLength)
		BEGIN
			DECLARE @char NVARCHAR(1)
			SET @char = SUBSTRING(@word, @index, 1)

			IF (@setOfLetters LIKE '%' + @char + '%')
				SET @boolResult = 1
			ELSE 
				SET @boolResult = 0
				BREAK
		END
	RETURN @boolResult
END

SELECT DBO.ufn_IsWordComprised('oistmiahf', 'halves')