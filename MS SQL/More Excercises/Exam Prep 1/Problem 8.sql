SELECT F.Id, 
	   F.[Name],
	   CONVERT(NVARCHAR(50), F.Size) + 'KB' AS [Size]
	FROM Files AS F
	LEFT JOIN Files AS FA ON F.Id = FA.ParentId
	WHERE FA.Id IS NULL
	ORDER BY F.Id ASC,
			 F.[Name] ASC,
			 F.Size DESC