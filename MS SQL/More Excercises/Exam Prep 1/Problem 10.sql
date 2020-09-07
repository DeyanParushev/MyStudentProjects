SELECT Username, AVG(Size) AS Size
	FROM Commits
	JOIN Users ON Commits.ContributorId = Users.Id
	JOIN Files ON Commits.Id = Files.CommitId
	GROUP BY Username
	ORDER BY Size DESC,
			 Username ASC