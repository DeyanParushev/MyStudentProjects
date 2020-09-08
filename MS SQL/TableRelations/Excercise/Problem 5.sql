CREATE TABLE ItemTypes (
	ItemTypeID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL
)

CREATE TABLE Items (
	ItemID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL,
	ItemTypeID INT FOREIGN KEY (ItemTypeID) REFERENCES ItemTypes(ItemTypeID)
);

CREATE TABLE Cities (
	CityID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL
)

CREATE TABLE Customers (
	CustomerID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] VARCHAR(50) NOT NULL,
	Birthday DATE,
	CityID INT FOREIGN KEY (CityID) REFERENCES Cities(CityID)
)

CREATE TABLE Orders (
	OrderID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	CustomerID INT FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
)

CREATE TABLE OrderItems (
	OrderID INT FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) NOT NULL,
	ItemID INT FOREIGN KEY (ItemID) REFERENCES Items(ItemID) NOT NULL
)

ALTER TABLE OrderItems
	add CONSTRAINT PF_OrderID_ItemID
	PRIMARY KEY (OrderID, ItemID)