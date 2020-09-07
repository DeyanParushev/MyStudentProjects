CREATE TABLE Users(
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
	[Name] VARCHAR(30) NOT NULL,
	[Password] VARCHAR(26) NOT NULL,
	ProfilePicture VARBINARY(MAX),
	LastLoginTime DATETIME2,
	IsDeleted BIT NOT NULL,
	CONSTRAINT UC_Name UNIQUE([Name]),
	CONSTRAINT CK_ProfilePictureSize CHECK (DATALENGTH(ProfilePicture) <= 900 * 1024), 
)

INSERT INTO Users([Name], [Password], ProfilePicture, LastLoginTime, IsDeleted)
	VALUES
			('Ivan', '123456', NULL, GETDATE(), 1),
			('Ivan1', '123456', NULL, GETDATE(), 0),
			('Ivan2', '123456', NULL, GETDATE(), 1),
			('Ivan3', '123456', NULL, GETDATE(), 0),
			('Ivan4', '123457', NULL, GETDATE(), 1);

ALTER TABLE Users
DROP PK__Users__3214EC07918A506E

ALTER TABLE Users
ADD PRIMARY KEY (Id, [Name])

ALTER TABLE Users
ADD CONSTRAINT CK_PasswordMinimumLength CHECK (LEN([Password]) >= 5);