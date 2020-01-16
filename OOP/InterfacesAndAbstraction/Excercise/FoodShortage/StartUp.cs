namespace FoodShortage
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main()
        {
            int numberOfPeople = int.Parse(Console.ReadLine());

            List<IBuyer> buyersList = new List<IBuyer>();

            for (int i = 0; i < numberOfPeople; i++)
            {
                string[] personalInputInfo = Console.ReadLine()
                                                    .Split();

                IBuyer person;

                string name = personalInputInfo[0];
                int age = int.Parse(personalInputInfo[1]);
                string groupOrId = personalInputInfo[2];

                if (personalInputInfo.Length < 4)
                {
                    person = new Rebel(name, age, groupOrId);
                }
                else
                {
                    string birthDate = personalInputInfo[3];

                    person = new Citizen(name, age, groupOrId, birthDate);
                }

                buyersList.Add(person);
            }

            string buyersName = Console.ReadLine();

            while (buyersName != "End")
            {
                if (buyersList.Exists(x => x.Name == buyersName))
                {
                    buyersList.FirstOrDefault(x => x.Name == buyersName)
                              .BuyFood();

                }

                buyersName = Console.ReadLine();
            }

            Console.WriteLine(buyersList.Sum(x => x.Food));
        }
    }
}
