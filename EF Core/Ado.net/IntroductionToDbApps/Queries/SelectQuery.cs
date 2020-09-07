using System.Collections.Generic;
using System.Text;
using Microsoft.Data.SqlClient;

namespace Queries
{
    public class SelectQuery
    {
        private SqlConnection connection;

        public SelectQuery(SqlConnection connection)
        {
            this.connection = connection;
        }

        public string GetVilliansNamesAndTheirMinionsCount()
        {
            string queryString = "SELECT Villians.[Name], [Count] " +
                                 "FROM (SELECT VillianId, COUNT(*) AS[Count] " +
                                        "FROM MinionsVillians " +
                                        "GROUP BY VillianId) AS GroupedData " +
                                 "JOIN Villians ON GroupedData.VillianId = Villians.Id " +
                                 "WHERE[Count] > 3";

            SqlCommand command = new SqlCommand(queryString, this.connection);
            using SqlDataReader dataReader = command.ExecuteReader();
            StringBuilder sb = new StringBuilder();

            while (dataReader.Read())
            {
                string currentLine = $"{dataReader["Name"]} - {dataReader["Count"]}";
                sb.AppendLine(currentLine);
            }

            return sb.ToString();
        }

        public string GetMinionsNameAndAgeByVillianId(int villianId)
        {
            StringBuilder sb = new StringBuilder();
            string villainQuery = $"SELECT [Name] FROM Villians WHERE Id = @villainId";

            SqlCommand villainCommand = new SqlCommand(villainQuery, this.connection);
            villainCommand.Parameters.AddWithValue("@villainId", villianId);

            string villainName = villainCommand.ExecuteScalar()?.ToString();

            if (villainName == null)
            {
                sb.Append($"No villain with ID {villianId} exists in the database.");
                return sb.ToString();
            }
            else
            {
                sb.AppendLine($"Villain: {villainName}");
            }

            string minionsQuery = "SELECT Minions.[Name], Age " +
                                  "FROM MinionsVillians " +
                                  "JOIN Minions ON MinionsVillians.MinionId = Minions.Id " +
                                  "WHERE VillianId = @villainId";

            SqlCommand minionsCommand = new SqlCommand(minionsQuery, this.connection);
            minionsCommand.Parameters.AddWithValue("@villainId", villianId);

            using SqlDataReader minionsDataReader = minionsCommand.ExecuteReader();

            if (minionsDataReader.HasRows)
            {
                int minionCounter = 1;

                while (minionsDataReader.Read())
                {
                    sb.AppendLine($"{minionCounter}. {minionsDataReader["Name"]} {minionsDataReader["Age"]}");
                    minionCounter++;
                }
            }
            else
            {
                sb.Append("(no minions)");
            }

            return sb.ToString().TrimEnd();
        }

        public string GetAllMinnionsAndTheirNames()
        {
            string selectQuery = "SELECT Id, [Name] FROM Minions";
            SqlCommand command = new SqlCommand(selectQuery, this.connection);
            using SqlDataReader dataReader = command.ExecuteReader();

            List<string> rowId = new List<string>();
            List<string> minionNames = new List<string>();

            while (dataReader.HasRows)
            {
                dataReader.Read();
                rowId.Add(dataReader["Id"]?.ToString());
                minionNames.Add(dataReader["Name"]?.ToString());
            }

            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < rowId.Count / 2; i++)
            {
                sb.AppendLine(minionNames[i]);
                sb.AppendLine(minionNames[minionNames.Count - 1 - i]);

                if (rowId.Count % 2 != 0 && i == ((rowId.Count - 1) / 2) - 1)
                {
                    sb.AppendLine(minionNames[i + 1]);
                }
            }

            return sb.ToString().TrimEnd();
        }

        public ICollection<Minion> GetAllMinionsIdNameAndAge()
        {
            List<Minion> minions = new List<Minion>();

            string selectQuery = "SELECT Id, [Name], Age FROM Minions";
            SqlCommand command = new SqlCommand(selectQuery, this.connection);

            using SqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                Minion minion = new Minion(int.Parse(reader["Id"].ToString()),
                                           reader["Name"].ToString(),
                                           int.Parse(reader["Age"].ToString()));
                minions.Add(minion);
            }

            return minions;
        }

        public int GetCountryIdIfItExists(string country)
        {
            string selectString = "SELECT Id FROM Countries WHERE [Name] = @country";
            SqlCommand command = new SqlCommand(selectString, this.connection);
            command.Parameters.AddWithValue("@country", country);

            string countryIdAsString = command.ExecuteScalar()?.ToString();

            if (countryIdAsString == null)
            {
                return 0;
            }
            else
            {
                return int.Parse(countryIdAsString);
            }
        }

        public ICollection<string> GetAllTownsForACountry(string countryName)
        {
            string selectString = "SELECT Towns.[Name] FROM Towns JOIN Countries ON Towns.CountryCode = Countries.Id WHERE Countries.[Name] = @countryName";
            SqlCommand command = new SqlCommand(selectString, this.connection);
            command.Parameters.AddWithValue("@countryName", countryName);

            using SqlDataReader dataReader = command.ExecuteReader();
            List<string> towns = new List<string>();

            while (dataReader.Read())
            {
                towns.Add(dataReader["Name"].ToString());
            }

            return towns;
        }

        public int GetMinionsIds(string villainId)
        {
            string selectString = "SELECT MinionId FROM MinionsVillians WHERE VillianId = @villainId";
            SqlCommand command = new SqlCommand(selectString, this.connection);
            command.Parameters.AddWithValue("@villainId", villainId);

            using SqlDataReader reader = command.ExecuteReader();
            Stack<string> minionsIds = new Stack<string>();

            while (reader.Read())
            {
                minionsIds.Push(reader["MinionId"].ToString());
            }

            return minionsIds.Count;
        }

        public int GetObjectId(string itemName, string itemTable)
        {
            string query = $"SELECT Id FROM {itemTable} WHERE [Name] = @itemName";

            SqlCommand command = new SqlCommand(query, this.connection);
            command.Parameters.AddWithValue("@itemName", itemName);

            using SqlDataReader dataReader = command.ExecuteReader();
            int objectId = 0;

            if (dataReader.HasRows)
            {
                dataReader.Read();
                objectId = int.Parse(dataReader["Id"].ToString());
            }

            return objectId;
        }
    }
}
