using Microsoft.Data.SqlClient;

namespace Queries
{
    public class ProcedureCreator
    {
        private SqlConnection connection;
        private SqlCommand command;

        public ProcedureCreator(SqlConnection connection)
        {
            this.connection = connection;
            command = new SqlCommand("", this.connection);
        }

        public void CreateGetOlder()
        {
            string creationString = "CREATE OR ALTER PROCEDURE usp_GetOlder (@minionId INT) " +
                                    "AS " +
                                    "BEGIN " +
                                    "UPDATE Minions " +
                                    "SET Age += 1" +
                                    "WHERE Id = @minionId " +
                                    "END";

            this.command.CommandText = creationString;
            this.command.ExecuteNonQuery();
        }

        public void ExecuteGetOlder(string minionId)
        {
            string execute = "EXECUTE dbo.usp_GetOlder @minionId";
            this.command.Parameters.AddWithValue("@minionId", minionId);
            command.CommandText = execute;
            command.ExecuteNonQuery();
        }
    }
}
