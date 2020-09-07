SELECT CountryCode, COUNT(MountainId) as MountainRanges
	FROM MountainsCountries
	WHERE CountryCode IN ('BG', 'US', 'RU')
	GROUP BY CountryCode