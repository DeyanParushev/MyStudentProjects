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
	
CREATE PROCEDURE usp_CalculateFutureValueForAccount @accountId int, @interest float
AS
BEGIN
	SELECT AccountHolderId AS [Account Id],
		   FirstName AS [First Name],
		   LastName AS [Last Name],
		   Balance AS [Current Balance],
		   dbo.ufn_CalculateFutureValue(Balance, @interest, 5) AS [Balance in 5 years]
		FROM Accounts
		JOIN AccountHolders ON Accounts.AccountHolderId = AccountHolders.Id
		WHERE AccountHolderId = @accountId
END

EXECUTE usp_CalculateFutureValueForAccount @accountId = 1, @interest = 0.1

