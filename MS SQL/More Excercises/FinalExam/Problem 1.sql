CREATE TABLE Cities (
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(20) NOT NULL,
	CountryCode NCHAR(2) NOT NULL --POSSIBLE PROBLEM--
)

CREATE TABLE Hotels (
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(30) NOT NULL,
	CityId INT FOREIGN KEY REFERENCES Cities(Id),
	EmployeeCount INT NOT NULL,
	BaseRate DECIMAL(15, 2)
)

CREATE TABLE Rooms (
	Id INT PRIMARY KEY IDENTITY,
	Price DECIMAL(15, 2) NOT NULL,
	[Type] NVARCHAR(20) NOT NULL,
	Beds INT NOT NULL,
	HotelId INT FOREIGN KEY REFERENCES Hotels(Id)
)

CREATE TABLE Trips (
	Id INT PRIMARY KEY IDENTITY,
	RoomId INT FOREIGN KEY REFERENCES Rooms(Id),
	BookDate DATETIME2, --POSSIBLE DATE VARIABLE TYPE--
	ArrivalDate DATETIME2,
	ReturnDate DATETIME2,
	CancelDate DATETIME2,
	CONSTRAINT CK_ArrivalIsAfterBooking CHECK (BookDate < ArrivalDate),
	CONSTRAINT CK_ReturnIsAfterArrival CHECK (ArrivalDate < ReturnDate)
)

CREATE TABLE Accounts (
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(50) NOT NULL,
	MiddleName NVARCHAR(20),
	LastName NVARCHAR(50) NOT NULL,
	CityId INT FOREIGN KEY REFERENCES Cities(Id),
	BirthDate DATETIME2 NOT NULL, --POSSIBLE DATE VARIABLE TYPE--
	Email NVARCHAR(100) NOT NULL UNIQUE
)

CREATE TABLE AccountsTrips (
	AccountId INT FOREIGN KEY REFERENCES Accounts(Id),
	TripId INT FOREIGN KEY REFERENCES Trips(Id),
	Luggage INT NOT NULL,
	CONSTRAINT CK_LuggageSize CHECK (Luggage >= 0),
	CONSTRAINT PK_AccountIdTripIdPK PRIMARY KEY (AccountId, TripId)
)