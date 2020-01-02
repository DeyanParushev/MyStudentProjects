namespace PersonsInfo
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main()
        {
            int peopleCount = int.Parse(Console.ReadLine());

            List<Person> people = new List<Person>();

            for (int i = 0; i < peopleCount; i++)
            {
                string[] personalInfo = Console.ReadLine()
                                                .Split();

                string name = personalInfo[0];
                string lastname = personalInfo[1];
                int age = int.Parse(personalInfo[2]);

                Person person = new Person(name, lastname, age);

                people.Add(person);
            }

            people.OrderBy(x => x.Name)
                  .ThenBy(y => y.Age)
                  .ToList()
                  .ForEach(z=> Console.WriteLine(z.ToString()));
        }
    }
}
