SELECT ContinentCode, CurrencyCode, CurrencyCount
		FROM 
			(SELECT ContinentCode, 
				    CurrencyCode, 
					CurrencyCount,
					DENSE_RANK() OVER(PARTITION BY ContinentCode ORDER BY CurrencyCount DESC) AS CurrencyRank 
			FROM 
				(SELECT ContinentCode, CurrencyCode, COUNT(currencyCode) AS CurrencyCount
				FROM Countries
				GROUP BY ContinentCode, CurrencyCode) AS currenciesAndContinents
			WHERE CurrencyCount > 1) AS currenciesRanked
		WHERE CurrencyRank = 1
		ORDER BY ContinentCode

