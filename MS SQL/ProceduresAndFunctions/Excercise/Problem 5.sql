CREATE FUNCTION ufn_GetSalaryLevel(@salary DECIMAL(18, 4))
RETURNS NVARCHAR(10)
AS
BEGIN
	DECLARE @salaryLevel NVARCHAR(10);
		IF @salary < 30000 SET @salaryLevel = 'Low'
		ELSE IF @salary >= 30000 AND @salary <= 50000 SET @salaryLevel = 'Average'
		ELSE SET @salaryLevel = 'High'
	RETURN @salaryLevel
END
