CREATE TABLE Minions(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(30) NOT NULL,
	Age TINYINT
)

INSERT INTO Minions
	VALUES
			(1, 'Pooh', NULL),
			(2, 'Pigglet', 22),
			(3, 'Kevin', 12);

CREATE TABLE Towns(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(30) NOT NULL,
)

INSERT INTO Towns
	VALUES
			(1, 'Sofia'),
			(2, 'Hong Kong'),
			(3, 'Madrid');

