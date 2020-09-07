namespace Vehicles
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            Vehicle car = new Car(1, 1, 1);
            Vehicle truck = new Truck(1, 1, 1);
            Vehicle bus = new Bus(1, 1, 1);

            for (int i = 0; i < 3; i++)
            {
                string[] vehicleInfo = Console.ReadLine()
                    .Split();

                double fuel = double.Parse(vehicleInfo[1]);
                double fuelConsumption = double.Parse(vehicleInfo[2]);
                double tankCapacity = double.Parse(vehicleInfo[3]);

                switch (i)
                {
                    case 0:
                        car = new Car(fuel, fuelConsumption, tankCapacity);
                        break;

                    case 1:
                        truck = new Truck(fuel, fuelConsumption, tankCapacity);
                        break;

                    case 2:
                        bus = new Bus(fuel, fuelConsumption, tankCapacity);
                        break;
                }
            }

            int commandsNumber = int.Parse(Console.ReadLine());

            for (int i = 0; i < commandsNumber; i++)
            {
                try
                {
                    string[] commandInput = Console.ReadLine()
                        .Split();

                    string command = commandInput[0];
                    string vehiculeType = commandInput[1];

                    if (command == "Drive")
                    {
                        double distance = double.Parse(commandInput[2]);

                        if (vehiculeType == "Car")
                        {
                            car.Drive(distance);
                        }
                        else if (vehiculeType == "Truck")
                        {
                            truck.Drive(distance);
                        }
                        else
                        {
                            bus.Drive(distance);
                        }
                    }
                    else if (command == "Refuel")
                    {
                        double liters = double.Parse(commandInput[2]);

                        if (vehiculeType == "Car")
                        {
                            car.Refuel(liters);
                        }
                        else if (vehiculeType == "Truck")
                        {
                            truck.Refuel(liters);
                        }
                        else
                        {
                            bus.Refuel(liters);
                        }
                    }
                    else if (bus is Bus bus1)
                    {
                        double distance = double.Parse(commandInput[2]);

                        bus1.DriveEmpty(distance);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            Console.WriteLine(car.ToString());
            Console.WriteLine(truck.ToString());
            Console.WriteLine(bus.ToString());
        }
    }
}
