SELECT TOP(5) c.CountryName, 
			  MAX(p.Elevation) AS PeakElevation, 
			  MAX(r.Length) AS LongestRiverLeght
	FROM Countries AS c
	JOIN MountainsCountries AS mc ON c.CountryCode = mc.CountryCode
	JOIN Mountains AS m ON mc.MountainId = m.Id
	JOIN Peaks AS p ON m.Id = p.MountainId
	JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
	JOIN Rivers AS r ON cr.RiverId = r.Id
	GROUP BY CountryName
	ORDER BY PeakElevation DESC,
			 LongestRiverLeght DESC,
			 CountryName

