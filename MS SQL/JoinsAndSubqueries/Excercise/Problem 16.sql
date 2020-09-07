SELECT COUNT(Countries.CountryCode) AS Count
	FROM Countries
	LEFT JOIN MountainsCountries ON countries.CountryCode = MountainsCountries.CountryCode
	WHERE MountainsCountries.CountryCode IS NULL
