namespace WildFarm
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            int rowCounter = 0;
            string userInput = Console.ReadLine();

            List<Animal> animals = new List<Animal>();

            while (userInput != "End")
            {
                string[] inputInfo = userInput.Split();

                if (rowCounter % 2 == 0)
                {
                    animals.Add(CreateAnimal(inputInfo));
                }
                else
                {
                    Food food = CreateFood(inputInfo);
                    animals[animals.Count - 1].AskForFood();
                    animals[animals.Count - 1].EatFood(food, food.Quantity);
                }

                rowCounter++;
                userInput = Console.ReadLine();
            }

            foreach (Animal animal in animals)
            {
                Console.WriteLine(animal.ToString());
            }
        }

        public static Animal CreateAnimal(string[] inputInfo)
        {
            string animalType = inputInfo[0];
            string animalName = inputInfo[1];
            double weight = double.Parse(inputInfo[2]);

            Animal outputAnimal;

            if(animalType == "Cat" || animalType == "Tiger")
            {
                string livingRegion = inputInfo[3];
                string breed = inputInfo[4];

                if(animalType == "Cat")
                {
                    outputAnimal = new Cat(animalName, weight, livingRegion, breed);
                }
                else
                {
                    outputAnimal = new Tiger(animalName, weight, livingRegion, breed);
                }
            }
            else if(animalType == "Mouse" || animalType == "Dog")
            {
                string livingRegion = inputInfo[3];

                if (animalType == "Mouse")
                {
                    outputAnimal = new Mice(animalName, weight, livingRegion);
                }
                else
                {
                    outputAnimal = new Dog(animalName, weight, livingRegion);
                }
            }
            else
            {
                double wingSize = double.Parse(inputInfo[3]);

                if(animalType == "Owl")
                {
                    outputAnimal = new Owl(animalName, weight, wingSize);
                }
                else
                {
                    outputAnimal = new Hen(animalName, weight, wingSize);
                }
            }

            return outputAnimal;
        }

        public static Food CreateFood(string[] inputInfo)
        {
            string foodType = inputInfo[0];
            int quantity = int.Parse(inputInfo[1]);

            Food food;

            if (foodType == "Vegetable")
            {
                food = new Vegetable(quantity);
            }
            else if (foodType == "Meat")
            {
                food = new Meat(quantity);
            }
            else if (foodType == "Seeds")
            {
                food = new Seeds(quantity);
            }
            else
            {
                food = new Fruit(quantity);
            }

            return food;
        }
    }
}
