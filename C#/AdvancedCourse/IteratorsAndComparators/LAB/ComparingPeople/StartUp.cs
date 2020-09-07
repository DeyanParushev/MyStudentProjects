namespace ComparingObjects
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            List<Person> people = new List<Person>();

            FillInListOfPeople(people);

            int personIndex = int.Parse(Console.ReadLine());

            Person personOfInterest = people[personIndex - 1];

            int numberOfMatches = 0;

            if (personIndex < 0 || personIndex > people.Count-1)
            {
                Console.WriteLine($"No matches");
            }
            else
            {
                for (int i = 0; i < people.Count; i++)
                {
                    if (people[i].CompareTo(personOfInterest) == 0)
                    {
                        numberOfMatches++;
                    }
                }

                if (numberOfMatches != 0)
                {
                    Console.WriteLine($"{numberOfMatches} {people.Count - numberOfMatches} {people.Count}");
                }
                else
                {
                    Console.WriteLine("No matches");
                }
            }
        }

        public static void FillInListOfPeople(List<Person> people)
        {
            string inputLine = Console.ReadLine();

            while (inputLine != "END")
            {
                string[] personalInfo = inputLine
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);

                string name = personalInfo[0];
                int age = int.Parse(personalInfo[1]);
                string town = personalInfo[2];

                Person newPerson = new Person(name, age, town);

                people.Add(newPerson);

                inputLine = Console.ReadLine();
            }
        }
    }
}
