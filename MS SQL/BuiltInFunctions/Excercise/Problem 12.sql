SELECT CountryName, IsoCode AS [ISO Code]
	FROM Countries
	WHERE LEN(LOWER (CountryName)) - LEN(REPLACE(LOWER(CountryName), 'a', '')) >= 3
	ORDER BY IsoCode