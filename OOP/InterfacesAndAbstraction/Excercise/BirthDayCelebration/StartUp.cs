namespace BirthDayCelebration
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        static void Main()
        {
            string inputLine = Console.ReadLine();

            List<IBirthable> livingThings = new List<IBirthable>();

            while (inputLine != "End")
            {
                string[] inputInfo = inputLine.Split();
                string typeOfOrganism = inputInfo[0];

                IBirthable livingOrganism;

                if (typeOfOrganism == "Pet")
                {
                    string name = inputInfo[1];
                    string birthDate = inputInfo[2];

                    livingOrganism = new Pet(name, birthDate);

                    livingThings.Add(livingOrganism);
                }
                else if (typeOfOrganism == "Citizen")
                {
                    string name = inputInfo[1];
                    int age = int.Parse(inputInfo[2]);
                    string id = inputInfo[3];
                    string birthDate = inputInfo[4];

                    livingOrganism = new Citizen(name, age, id, birthDate);

                    livingThings.Add(livingOrganism);
                }

                inputLine = Console.ReadLine();
            }

            string desiredBirthYear = Console.ReadLine();

            if (livingThings.Any(x => x.Birthdate.EndsWith(desiredBirthYear)))
            {
                livingThings.FindAll(x => x.Birthdate.EndsWith(desiredBirthYear))
                            .ForEach(x => Console.WriteLine(x.Birthdate));
            }
        }
    }
}
