CREATE TABLE Majors (
	MajorID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE Students (
	StudentID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	StudentNumber INT NOT NULL,
	StudentName NVARCHAR(50) NOT NULL,
	MajorID INT FOREIGN KEY (MajorID) REFERENCES Majors(MajorID)
)

CREATE TABLE Payments (
	PaymentID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	PaymentDate DATETIME2 NOT NULL, 
	PaymentAmount MONEY NOT NULL,
	StudentID INT FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

CREATE TABLE Subjects (
	SubjectID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	SubjectName NVARCHAR(50) NOT NULL
)

CREATE TABLE Agenda (
	StudentID INT FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
	SubjectID INT FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
	ConstraINT PK_StudentID_SubjectID PRIMARY KEY (StudentID, SubjectID)
)

