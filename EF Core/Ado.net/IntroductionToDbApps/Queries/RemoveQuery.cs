using System.Text;
using Microsoft.Data.SqlClient;

namespace Queries
{
    public class RemoveQuery
    {
        private SqlConnection connection;
        private SelectQuery select;

        public RemoveQuery(SqlConnection connection)
        {
            this.connection = connection;
            this.select = new SelectQuery(this.connection);
        }

        public string RemoveVillain(string villainId)
        {
            string villainName = this.CheckIfVillainExist(villainId);
            StringBuilder sb = new StringBuilder();

            if (villainName == null)
            {
                sb.Append("No such villain was found.");
            }
            else
            {
                sb.AppendLine($"{villainName} was deleted.");

                int minionsIdsToRemove = this.select.GetMinionsIds(villainId);
                this.RemoveVillainFromVillainsMinions(villainId);
                this.RemoveFromVillains(villainId);

                sb.AppendLine($"{minionsIdsToRemove} minions were released.");
            }

            return sb.ToString().TrimEnd();
        }

        private void RemoveFromVillains(string villainId)
        {
            string removeString = "DELETE FROM Villians WHERE Id = @villainId";
            SqlCommand command = new SqlCommand(removeString, this.connection);
            command.Parameters.AddWithValue("@villainId", villainId);
            command.ExecuteNonQuery();
        }

        private string CheckIfVillainExist(string villaiId)
        {
            string selectString = "SELECT [Name] FROM Villians WHERE [Id] = @villaiId";
            SqlCommand command = new SqlCommand(selectString, this.connection);
            command.Parameters.AddWithValue("@villaiId", villaiId);

            string villainName = command.ExecuteScalar()?.ToString();

            return villainName;
        }

        private void RemoveVillainFromVillainsMinions(string villainId)
        {
            string removeString = "DELETE FROM MinionsVillians WHERE VillianId = @villainId";
            SqlCommand command = new SqlCommand(removeString, this.connection);
            command.Parameters.AddWithValue("@villainId", villainId);
            command.ExecuteNonQuery();
        }
    }
}
