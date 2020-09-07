CREATE FUNCTION ufn_CalculateFutureValue(@totalMoney DECIMAL(12, 4), @interestRate FLOAT, @numberOfYears INT)
RETURNS DECIMAL (15, 4)
AS
BEGIN 
	DECLARE @futureValue DECIMAL (15, 4)

	DECLARE @power DECIMAL (15, 4)
	SET @power = @totalMoney * POWER(1 + @interestRate, @numberOfYears)

	SET @futureValue = @totalMoney * @power
	RETURN @power
END
	