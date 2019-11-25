namespace DefiningClasses
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            int carNumber = int.Parse(Console.ReadLine());

            HashSet<string> carNames = new HashSet<string>();
            List<Car> cars = new List<Car>();

            for (int i = 0; i < carNumber; i++)
            {
                string[] inputInfo = Console.ReadLine()
                    .Split();

                string name = inputInfo[0];
                double fuelAmount = double.Parse(inputInfo[1]);
                double consumption = double.Parse(inputInfo[2]);

                if (!carNames.Contains(name))
                {
                    carNames.Add(name);

                    Car newCar = new Car(name, fuelAmount, consumption);
                    cars.Add(newCar);
                }
            }

            string instructions = Console.ReadLine();

            while (instructions != "End")
            {
                string[] input = instructions
                    .Split();

                string model = input[1];
                double distance = double.Parse(input[2]);

                Car currentCar = cars.Find(x=> x.Model == model);
                currentCar.Drive(distance);

                instructions = Console.ReadLine();
            }

            foreach (Car vehicle in cars)
            {
                Console.WriteLine($"{vehicle.Model} {vehicle.FuelAmount:f2} {vehicle.TraveledDistance}");
            }
        }
    }
}
