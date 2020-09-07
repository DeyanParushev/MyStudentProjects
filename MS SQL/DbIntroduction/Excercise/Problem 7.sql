CREATE TABLE People(
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
	[Name] NVARCHAR(200) NOT NULL,
	Picture VARBINARY(MAX),
	Height DECIMAL(3,2),
	[Weight] DECIMAL(5,2),
	Gender CHAR(1) NOT NULL,
	Birthdate DATE NOT NULL,
	Biography NVARCHAR(MAX)
)

INSERT INTO People([Name], Picture, Height, [Weight], Gender, Birthdate, Biography)
	VALUES
			('Ivan', NULL, 2.32, 104.31, 'm', '05.19.2020', NULL),
			('Petkan', NULL, 1.87, 195.12, 'm', '05.19.2020', NULL),
			('Ivanka', NULL, 1.6, 40, 'f', '05.19.2020', NULL),
			('Ivan', NULL, 2.32, 104.31, 'm', '05.19.2020', NULL),
			('Ivan', NULL, 2.32, 104.31, 'm', '05.19.2020', NULL)