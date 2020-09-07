using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;

namespace Queries
{ 
    public class StartUp
    {
        private const string ConnectionString = @"Server=DESKTOP-AO4FH48;Database=MinionsDB;Integrated Security=true;";

        public static void Main(string[] args)
        {
            using SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            //ProblemNumber2(connection);
            //ProblemNumber3(connection);
            //ProblemNumber4(connection);
            //ProblemNumber5(connection);
            //ProblemNumber6(connection);
            //ProblemNumber7(connection);
            //ProblemNumber8(connection);
            ProblemNumber9(connection);
        }

        public static void ProblemNumber2(SqlConnection connection)
        {
            SelectQuery select = new SelectQuery(connection);

            Console.Write(select.GetVilliansNamesAndTheirMinionsCount());
        }

        public static void ProblemNumber3(SqlConnection connection)
        {
            SelectQuery select = new SelectQuery(connection);
            int villainId = int.Parse(Console.ReadLine());

            Console.Write(select.GetMinionsNameAndAgeByVillianId(villainId));
        }

        public static void ProblemNumber4(SqlConnection connection)
        {
            InsertQuery insert = new InsertQuery(connection);

            Console.WriteLine(insert.InsertMinion());
        }

        public static void ProblemNumber5(SqlConnection connection)
        {
            string country = Console.ReadLine();
            UpdateQuery update = new UpdateQuery(connection);

            Console.WriteLine(update.UpdateTownsInCountry(country));
        }

        public static void ProblemNumber6(SqlConnection connection)
        {
            string villainId = Console.ReadLine();
            RemoveQuery remove = new RemoveQuery(connection);

            Console.WriteLine(remove.RemoveVillain(villainId));
        }

        public static void ProblemNumber7(SqlConnection connection)
        {
            SelectQuery select = new SelectQuery(connection);

            Console.WriteLine(select.GetAllMinnionsAndTheirNames());
        }

        public static void ProblemNumber8(SqlConnection connection)
        {
            string[] minionsIds = Console.ReadLine()
                                         .Split();

            UpdateQuery update = new UpdateQuery(connection);
            update.UpdateMinionsAge(minionsIds);

            SelectQuery select = new SelectQuery(connection);
            List<Minion> minions = select.GetAllMinionsIdNameAndAge()
                                         .ToList();

            foreach (Minion minion in minions)
            {
                Console.WriteLine($"{minion.Name} {minion.Age}");
            }
        }

        public static void ProblemNumber9(SqlConnection connection)
        {
            string minionId = Console.ReadLine();
            ProcedureCreator procedureCreator = new ProcedureCreator(connection);
            procedureCreator.CreateGetOlder();
            procedureCreator.ExecuteGetOlder(minionId);

            SelectQuery select = new SelectQuery(connection);

            Minion minion = select.GetAllMinionsIdNameAndAge()
                                  .FirstOrDefault(x => x.Id == int.Parse(minionId));

            Console.WriteLine($"{minion.Name} - {minion.Age} years old");
        }
    }
}
