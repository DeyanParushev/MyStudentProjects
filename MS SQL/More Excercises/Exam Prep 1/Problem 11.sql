CREATE FUNCTION udf_UserTotalCommits(@username NVARCHAR(50))
RETURNS INT
AS 
BEGIN
	DECLARE @userCommits INT
	
	SELECT @userCommits = COUNT(*)
		FROM Commits
		JOIN Users ON Commits.ContributorId = Users.Id
		WHERE Username = @username

	RETURN @userCommits
END