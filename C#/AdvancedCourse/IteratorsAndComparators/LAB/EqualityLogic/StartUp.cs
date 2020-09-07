namespace EqualityLogic
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            SortedSet<Person> sortedSetPeople = new SortedSet<Person>();

            HashSet<Person> hashSetOfPeople = new HashSet<Person>();

            int numberOfInputs = int.Parse(Console.ReadLine());

            for (int i = 0; i < numberOfInputs; i++)
            {
                string[] personalInfo = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);

                string name = personalInfo[0];
                int age = int.Parse(personalInfo[1]);

                Person newPerson = new Person(name, age);

                sortedSetPeople.Add(newPerson);
                hashSetOfPeople.Add(newPerson);
            }

            Console.WriteLine(sortedSetPeople.Count);

            Console.WriteLine(hashSetOfPeople.Count);
        }
    }
}
