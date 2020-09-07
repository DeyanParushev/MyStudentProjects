
SELECT DepositGroup
	FROM
		(SELECT TOP(2)
			DepositGroup, 
			AVG(MagicWandSize) AS LowestAverageWandSize
		FROM WizzardDeposits
		GROUP BY DepositGroup
		ORDER BY LowestAverageWandSize ASC) AS FullInfo