SELECT Issues.Id AS [Id],
	   Username + ' : ' + Issues.Title AS IssueAssignee
	FROM Issues
	JOIN Users ON Issues.AssigneeId = Users.Id
	ORDER BY Issues.Id DESC,
			 AssigneeId ASC
