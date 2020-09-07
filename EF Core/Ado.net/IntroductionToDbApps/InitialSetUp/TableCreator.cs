using Microsoft.Data.SqlClient;

namespace InnitialSetup
{
    public class TableCreator
    {
        private SqlConnection connection;

        public TableCreator(SqlConnection connection)
        {
            this.connection = connection;
        }

        public void CreateTableCountries()
        {
            string tableDefinition = "CREATE TABLE Countries (Id INT PRIMARY KEY IDENTITY, " +
                                                             "Name NVARCHAR(50) NOT NULL)";

            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }

        public void CreateTableTowns()
        {
            string tableDefinition = "CREATE TABLE Towns (Id INT PRIMARY KEY IDENTITY, " +
                                                         "Name NVARCHAR(50) NOT NULL, " +
                                                         "CountryCode INT FOREIGN KEY REFERENCES Countries(Id))";
            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }

        public void CreateTableMinions()
        {
            string tableDefinition = "CREATE TABLE Minions (Id INT PRIMARY KEY IDENTITY, " +
                                                         "Name NVARCHAR(50) NOT NULL, " +
                                                         "Age TINYINT NOT NULL, " +
                                                         "TownId INT FOREIGN KEY REFERENCES Towns(Id))";

            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }

        public void CreateTableEvilnessFactors()
        {
            string tableDefinition = "CREATE TABLE EvilnessFactors (Id INT PRIMARY KEY IDENTITY, " +
                                                                    "Name NVARCHAR(50) NOT NULL)";
            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }

        public void CreateTableVillians()
        {
            string tableDefinition = "CREATE TABLE Villians (Id INT PRIMARY KEY IDENTITY, " +
                                                            "Name NVARCHAR(50) NOT NULL," +
                                                            "EvilnessFactorId INT FOREIGN KEY REFERENCES EvilnessFactors(Id))";
            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }

        public void CreateTableMinionsVillians()
        {
            string tableDefinition = "CREATE TABLE MinionsVillians (MinionId INT FOREIGN KEY REFERENCES Minions(Id)," +
                                                                   "VillianId INT FOREIGN KEY REFERENCES Villians(Id)," +
                                                                   "CONSTRAINT PK_MinionIdVillianId PRIMARY KEY (MinionId, VillianId))";
            using SqlCommand command = new SqlCommand(tableDefinition, connection);
            command.ExecuteNonQuery();
        }
    }
}
