using Microsoft.Data.SqlClient;

namespace InnitialSetup
{
    public class TableInserter
    {
        private SqlConnection connection;

        public TableInserter(SqlConnection connection)
        {
            this.connection = connection;
        }

        private void InsertCountries()
        {
            for (int i = 1; i <= 5; i++)
            {
                string countryName = $"France{i}";

                string insertString =
                    "INSERT INTO Countries ([Name])" +
                    "VALUES" +
                    $"('{countryName}')";

                SqlCommand command = new SqlCommand(insertString, this.connection);
                command.ExecuteNonQuery();
            }
        }

        private void InsertTowns()
        {
            for (int i = 1; i <= 5; i++)
            {
                string townName = $"Paris{i}";

                string insertString =
                    "INSERT INTO Towns ([Name], CountryCode)" +
                    "VALUES" +
                    $"('{townName}', {i})";

                SqlCommand command = new SqlCommand(insertString, this.connection);
                command.ExecuteNonQuery();
            }
        }

        private void InsertMinions()
        {
            for (int i = 1; i <= 5; i++)
            {
                string minionName = $"Joe{i}";

                string insertString =
                    "INSERT INTO Minions ([Name], Age , TownId)" +
                    "VALUES" +
                    $"('{minionName}',{i * 3} , {i})";

                SqlCommand command = new SqlCommand(insertString, this.connection);
                command.ExecuteNonQuery();
            }
        }

        private void InsertEvilness()
        {
            string[] evilGrades = new string[] { "super good", "good", "bad", "evil", "super evil" };

            for (int i = 0; i < evilGrades.Length; i++)
            {
                string insertString = "INSERT INTO EvilnessFactors ([Name])" +
                                      "VALUES" +
                                      $"('{evilGrades[i]}')";
                using SqlCommand command = new SqlCommand(insertString, this.connection);
                command.ExecuteNonQuery();
            }
        }

        private void InserVillians()
        {
            for (int i = 1; i <= 5; i++)
            {
                string villian = $"Hitler{i}";

                string insertString =
                    "INSERT INTO Villians ([Name], EvilnessFactorId)" +
                    "VALUES" +
                    $"('{villian}', {i})";

                SqlCommand command = new SqlCommand(insertString, this.connection);
                command.ExecuteNonQuery();
            }
        }

        private void InsertIntoMinionsVillians()
        {
            for (int i = 1; i < 6; i++)
            {
                for (int j = 1; j < 6; j++)
                {
                    string insertString = "INSERT INTO MinionsVillians (MinionId, VillianId)" +
                                          "VALUES" +
                                          $"({i}, {j})";

                    using SqlCommand command = new SqlCommand(insertString, this.connection);
                    command.ExecuteNonQuery();
                }
            }
        }

        public void PopulateTables()
        {
            this.InsertCountries();
            this.InsertTowns();
            this.InsertMinions();
            this.InsertEvilness();
            this.InserVillians();
            this.InsertIntoMinionsVillians();
        }
    }
}
