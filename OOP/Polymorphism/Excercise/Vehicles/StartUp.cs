namespace Vehicles
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            string[] carInput = Console.ReadLine()
                                        .Split();

            double carFuelQuantity = double.Parse(carInput[1]);
            double carFuelConsumption = double.Parse(carInput[2]);
            Vehicle car = new Car(carFuelQuantity, carFuelConsumption);

            string[] truckInput = Console.ReadLine()
                                          .Split();

            double truckFuelQuantity = double.Parse(truckInput[1]);
            double truckFuelConsumption = double.Parse(truckInput[2]);
            Vehicle truck = new Truck(truckFuelQuantity, truckFuelConsumption);

            int commandsNumber = int.Parse(Console.ReadLine());

            for (int i = 0; i < commandsNumber; i++)
            {
                string[] inputLine = Console.ReadLine()
                                             .Split();

                string vehicle = inputLine[1];
                string action = inputLine[0];
                double distanceOrFuelValue = double.Parse(inputLine[2]);

                string output = string.Empty;

                if (vehicle == "Car")
                {
                    if (action == "Drive")
                    {
                        output = car.Drive(distanceOrFuelValue);
                    }
                    else
                    {
                        car.Refuel(distanceOrFuelValue);
                    }
                }
                else
                {
                    if (action == "Drive")
                    {
                        output = truck.Drive(distanceOrFuelValue);
                    }
                    else
                    {
                        truck.Refuel(distanceOrFuelValue);
                    }
                }

                if (output != string.Empty)
                {
                    Console.WriteLine(output);
                }
            }

            Console.WriteLine(car.ToString());
            Console.WriteLine(truck.ToString());
        }
    }
}
