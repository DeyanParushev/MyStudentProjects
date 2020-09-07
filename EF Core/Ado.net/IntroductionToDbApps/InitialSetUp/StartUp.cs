using Microsoft.Data.SqlClient;

namespace InnitialSetup
{
    public class StartUp
    {
        private const string ConnectionString = @"Server=DESKTOP-AO4FH48;Database=MinionsDB;Integrated Security=true;";

        public static void Main(string[] args)
        {
            using SqlConnection connection = new SqlConnection(ConnectionString);
            TableCreator tablecreator = new TableCreator(connection);

            connection.Open();
            GenerateMinionsDBTables(tablecreator);

            TableInserter tableinserter = new TableInserter(connection);
            tableinserter.PopulateTables();
        }

        private static void GenerateMinionsDBTables(TableCreator tableCreator)
        {
            tableCreator.CreateTableCountries();
            tableCreator.CreateTableTowns();
            tableCreator.CreateTableMinions();
            tableCreator.CreateTableEvilnessFactors();
            tableCreator.CreateTableVillians();
            tableCreator.CreateTableMinionsVillians();
        }
    }
}
