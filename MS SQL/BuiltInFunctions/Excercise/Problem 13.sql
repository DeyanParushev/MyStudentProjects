SELECT PeakName, RiverName, LOWER(PeakName + RIGHT(RiverName, LEN(RiverName) - 1)) AS Mix
	FROM Peaks, Rivers
	WHERE LOWER(RIGHT(PeakName, 1)) = LOWER(LEFT(RiverName, 1))
	ORDER BY Mix