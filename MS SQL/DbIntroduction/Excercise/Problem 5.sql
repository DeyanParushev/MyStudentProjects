CREATE TABLE Minions(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(30) NOT NULL,
	Age TINYINT,
)

CREATE TABLE Towns(
	Id INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(30) NOT NULL,
)

ALTER TABLE Minions
ADD TownId INT FOREIGN KEY (TownId) REFERENCES Towns (Id)

INSERT INTO Towns
	VALUES
			(1, 'Sofia'),
			(2, 'Plovdiv'),
			(3, 'Varna');

INSERT INTO Minions
	VALUES
			(1, 'Kevin', 22, 1),
			(2, 'Bob', 15, 3),
			(3, 'Steward', NULL, 2);

TRUNCATE TABLE Minions
