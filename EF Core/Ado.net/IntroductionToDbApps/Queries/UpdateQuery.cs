using System.Text;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;

namespace Queries
{
    public class UpdateQuery
    {
        private SqlConnection connection;

        public UpdateQuery(SqlConnection connection)
        {
            this.connection = connection;
        }

        public string UpdateTownsInCountry(string country)
        {
            SelectQuery select = new SelectQuery(this.connection);
            
            int countriId = select.GetCountryIdIfItExists(country);
            StringBuilder sb = new StringBuilder();

            if (countriId > 0)
            {
                List<string> towns = select.GetAllTownsForACountry(country)
                                           .ToList();

                Queue<string> capitalisedTowns = new Queue<string>();

                foreach (string town in towns)
                {
                    if (!this.CheckIfTownNameIsCapitalised(town))
                    {
                        string nameToUpdate = town.ToUpper();
                        capitalisedTowns.Enqueue(nameToUpdate);
                        this.UpdateTownName(nameToUpdate);
                    }
                }

                sb.AppendLine($"{capitalisedTowns.Count} town names were affected.");
                sb.AppendLine($"[{string.Join(", ", capitalisedTowns)}]");
            }
            else
            {
                sb.Append("No town names were affected.");
            }

            return sb.ToString().TrimEnd();
        }

        private void UpdateTownName(string townName)
        {
            string newTownName = townName.ToUpper();
            string updateString = "UPDATE Towns SET [Name] = @newTownName WHERE [Name] = @townName";

            SqlCommand command = new SqlCommand(updateString, this.connection);
            command.Parameters.AddWithValue("@newTownName", newTownName);
            command.Parameters.AddWithValue("@townName", townName);
            command.ExecuteNonQuery();
        }

        private bool CheckIfTownNameIsCapitalised(string town)
        {
            bool allLettersAreCapital = true;

            for (int i = 0; i < town.Length; i++)
            {
                if (!char.IsUpper(town[i])) 
                {
                    allLettersAreCapital = false;
                    break;
                }
            }

            return allLettersAreCapital;
        }

        public void UpdateMinionsAge(string[] minionsIds)
        {
            foreach (string minionId in minionsIds)
            {
                string update = "UPDATE Minions SET Age += 1 WHERE Id = @minionId";
                SqlCommand command = new SqlCommand(update, this.connection);

                command.Parameters.AddWithValue("@minionId", minionId);
                command.ExecuteNonQuery();
            }
        }
    }
}