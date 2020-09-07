CREATE PROCEDURE usp_GetHoldersWithBalanceHigherThan (@borderLevel DECIMAL(10,2))
AS
BEGIN 
	SELECT FirstName, LastName
	FROM 
		(SELECT FirstName, 
			   LastName,
			   AccountHolders.Id,
			   SUM(Balance) AS TotalBalance
		FROM AccountHolders
		JOIN Accounts ON Accounts.AccountHolderId = AccountHolders.Id
		GROUP BY FirstName, LastName, AccountHolders.Id) AS CongregatedInfo
	WHERE TotalBalance > @borderLevel
	ORDER BY FirstName, LastName
END


EXECUTE dbo.usp_GetHoldersWithBalanceHigherThan 10000




	