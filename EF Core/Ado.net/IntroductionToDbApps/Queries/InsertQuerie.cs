using System;
using System.Text;
using Microsoft.Data.SqlClient;

namespace Queries
{
    public class InsertQuery
    {
        private SqlConnection connection;
        private SelectQuery select;

        public InsertQuery(SqlConnection connection)
        {
            this.connection = connection;
            this.select = new SelectQuery(this.connection);
        }

        public string InsertMinion()
        {
            string[] minionParams = Console.ReadLine()
                                           .Split(" ");
            string villainName = Console.ReadLine();

            string minionName = minionParams[0];
            int minionAge = int.Parse(minionParams[1]);
            string minionTown = minionParams[2];

            StringBuilder sb = new StringBuilder();
            int villainId = this.select.GetObjectId(villainName, "Villians");
            int townId = this.select.GetObjectId(minionTown, "Towns");

            if(villainId <= 0)
            {
                this.InsertTownOrVillain(villainName, "Villians");
                villainId = this.select.GetObjectId(villainName, "Villians");
                sb.AppendLine($"Villain {villainName} was added to the database.");
            }

            if(townId <= 0)
            {
                this.InsertTownOrVillain(minionTown, "Towns");
                townId = this.select.GetObjectId(minionTown, "Towns");
                sb.AppendLine($"Town {minionTown} was added to the database");
            }

            this.InsertMinion(minionName, minionAge, townId, villainId);

            sb.Append($"Successfully added {minionName} to be minion of {villainName}.");

            return sb.ToString();
        }

        public void InsertTownOrVillain(string name, string tableName)
        {
            string insertString = $"INSERT INTO {tableName} ([Name]) VALUES (@name)";
            SqlCommand command = new SqlCommand(insertString, this.connection);
            command.Parameters.AddWithValue("@name", name);

            command.ExecuteNonQuery();
        }

        private void InsertMinion(string minionName, int minionAge, int townId, int villainId)
        {
            string insertMinionIntoMinions = "INSERT INTO Minions ([Name], Age, TownId) VALUES (@minionName, @age, @townId)";
            SqlCommand insertMinion = new SqlCommand(insertMinionIntoMinions, this.connection);
            insertMinion.Parameters.AddWithValue("@minionName", minionName);
            insertMinion.Parameters.AddWithValue("@age", minionAge);
            insertMinion.Parameters.AddWithValue("@townId", townId);

            insertMinion.ExecuteNonQuery();

            int minionId = this.select.GetObjectId(minionName, "Minions");
            string insertMinionAndVillain = "INSERT INTO MinionsVillians (MinionId, VillianId) VALUES (@minionId, @villainId)";
            SqlCommand insertMinionAndVillainCommand = new SqlCommand(insertMinionAndVillain, this.connection);
            insertMinionAndVillainCommand.Parameters.AddWithValue("@minionId", minionId);
            insertMinionAndVillainCommand.Parameters.AddWithValue("@villainId", villainId);

            insertMinionAndVillainCommand.ExecuteNonQuery();
        }
    }
}
