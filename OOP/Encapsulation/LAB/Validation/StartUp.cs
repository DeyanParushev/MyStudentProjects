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
                string lastName = personalInfo[1];
                int age = int.Parse(personalInfo[2]);
                decimal salary = decimal.Parse(personalInfo[3]);

                try
                {
                    Person person = new Person(name, lastName, age, salary);
                    people.Add(person);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            people.ForEach(x => Console.WriteLine(x.ToString()));
        }
     }
     
