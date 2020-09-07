SELECT TOP(5) CountryName, RiverName
	FROM Countries
	LEFT JOIN CountriesRivers ON Countries.CountryCode = CountriesRivers.CountryCode
	LEFT JOIN Rivers ON CountriesRivers.RiverId = Rivers.Id
	WHERE ContinentCode = 'AF'
	ORDER BY CountryName