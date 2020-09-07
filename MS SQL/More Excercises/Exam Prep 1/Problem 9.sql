 SELECT  [Name], COUNT(rc.ContributorId) AS Commits FROM dbo.RepositoriesContributors rc
JOIN dbo.Repositories r ON rc.RepositoryId = r.Id
JOIN dbo.Commits c ON rc.RepositoryId= c.RepositoryId
GROUP BY r.[Name]
ORDER BY COUNT(rc.ContributorId) DESC,r.[Name]