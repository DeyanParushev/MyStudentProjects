CREATE TABLE Students (
	StudentID INT PRIMARY KEY IDENTITY (1, 1) NOT NULL,
	[Name] NVARCHAR(20) NOT NULL
);

CREATE TABLE Exams (
	ExamID INT PRIMARY KEY IDENTITY (101, 1) NOT NULL,
	[Name] NVARCHAR(20) NOT NULL
);

CREATE TABLE StudentsExams (
	StudentID INT NOT NULL,
	ExamID INT NOT NULL
);

ALTER TABLE StudentsExams
	add CONSTRAINT FK_StudentsExams_Students
	FOREIGN KEY (StudentID) REFERENCES Students(StudentID);

ALTER TABLE StudentsExams
	add CONSTRAINT FK_StudentsExams_Exams
	FOREIGN KEY (ExamID) REFERENCES Exams(ExamID);

ALTER TABLE StudentsExams
	add CONSTRAINT PF_StudentsID_ExamID
	PRIMARY KEY (StudentID, ExamID);

INSERT INTO Students ([Name])
	VALUES
		('Mila'),
		('Toni'),
		('Ron');

INSERT INTO Exams ([Name])
	VALUES
		('SpringMVC'),A
		('Neo4j'),
		('Oracle 11g');

INSERT INTO StudentsExams
	VALUES 
		(1, 101),
		(1, 102),
		(2, 101),
		(3, 103),
		(2, 102),
		(2, 103);
