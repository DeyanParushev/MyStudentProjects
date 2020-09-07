CREATE TABLE Directors (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
	DirectorName NVARCHAR(50) NOT NULL, 
	Notes NVARCHAR(MAX)
)

INSERT INTO Directors
	VALUES
			('Director1', NULL),
			('Director2', 'SOME NOTES'),
			('Director3', NULL),
			('Director4', NULL),
			('Director5', NULL);

CREATE TABLE Genres (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL, 
	GenreName NVARCHAR(50) NOT NULL, 
	Notes NVARCHAR(MAX)
)

INSERT INTO Genres
	VALUES
			('Genre1', NULL),
			('Genre2', 'SOME NOTES'),
			('Genre3', NULL),
			('Genre4', NULL),
			('Genre5', NULL);

CREATE TABLE Categories (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL, 
	CategoryName NVARCHAR(50) NOT NULL, 
	Notes NVARCHAR(MAX)
)

INSERT INTO Categories
	VALUES
			('Category1', NULL),
			('Category2', 'SOME NOTES'),
			('Category3', NULL),
			('Category4', NULL),
			('Category5', NULL);

CREATE TABLE Movies (
	Id BIGINT PRIMARY KEY IDENTITY NOT NULL,
	Title NVARCHAR(50) NOT NULL, 
	DirectorId BIGINT FOREIGN KEY (DirectorId) REFERENCES Directors (Id) NOT NULL, 
	CopyrightYear DATE, 
	[Length] TIME, 
	GenreId BIGINT FOREIGN KEY (GenreId) REFERENCES Genres (Id) NOT NULL, 
	CategoryId BIGINT FOREIGN KEY (CategoryId) REFERENCES Categories (Id) NOT NULL, 
	Rating DECIMAL (3,1), 
	Notes NVARCHAR(MAX)
)

INSERT INTO Movies
	VALUES
			('Movie 1', 2, '1999', NULL, 1, 3, 29.5, NULL),
			('Movie 2', 2, '1999', NULL, 1, 3, 29.5, NULL),
			('Movie 3', 2, '1999', NULL, 1, 3, 29.5, NULL),
			('Movie 4', 2, '1999', NULL, 1, 3, 29.5, NULL),
			('Movie 5', 2, '1999', NULL, 1, 3, 29.5, NULL);

