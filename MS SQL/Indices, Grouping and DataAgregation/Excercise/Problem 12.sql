SELECT SUM(DepositDifference) AS SumDifference
	FROM
		(SELECT *,
    			Deposit - GuestWizzardDeposit AS [DepositDifference]
			FROM
				(SELECT 
					FirstName, 
					DepositAmount AS Deposit		,
					LEAD(FirstName) OVER(ORDER BY Id) AS GuestWizzard,
					LEAD(DepositAmount) OVER(ORDER BY Id) AS GuestWizzardDeposit
				FROM WizzardDeposits) AS FullInfo
			) AS CalculatedDepositDifference
