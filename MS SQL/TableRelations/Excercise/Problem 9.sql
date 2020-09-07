Select MountainRange, PeakName, Elevation from Peaks
	Join Mountains on Peaks.MountainId = Mountains.Id
	Where Mountains.MountainRange = 'Rila'
	Order by Peaks.Elevation desc