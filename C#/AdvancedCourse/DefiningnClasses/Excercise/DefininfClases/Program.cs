namespace DefiningClasses
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main()
        {
            int numberOfCars = int.Parse(Console.ReadLine());

            List<Car> cars = new List<Car>();

            for (int i = 0; i < numberOfCars; i++)
            {
                string[] inputInfo = Console.ReadLine()
                    .Split();

                string model = inputInfo[0];

                int engineSpeed = int.Parse(inputInfo[1]);
                int enginePower = int.Parse(inputInfo[2]);

                int cargoWeigh = int.Parse(inputInfo[3]);
                string cargoType = inputInfo[4];

                double tyreOnePresure = double.Parse(inputInfo[5]);
                int tyreOneAge = int.Parse(inputInfo[6]);

                double tyreTwoPresure = double.Parse(inputInfo[7]);
                int tyreTwoAge = int.Parse(inputInfo[8]);

                double tyreThreePresure = double.Parse(inputInfo[9]);
                int tyreThreeAge = int.Parse(inputInfo[10]);

                double tyreFourPresure = double.Parse(inputInfo[11]);
                int tyreFourAge = int.Parse(inputInfo[12]);

                Car newCar = new Car(model,
                    engineSpeed, enginePower,
                    cargoWeigh, cargoType,
                    tyreOnePresure, tyreOneAge,
                    tyreTwoPresure, tyreTwoAge,
                    tyreThreePresure, tyreThreeAge,
                    tyreFourPresure, tyreFourAge);

                cars.Add(newCar);
            }

            string cargoTypeFilter = Console.ReadLine();

            foreach (Car truck in cars)
            {
                if (truck.Cargo.CargoType == cargoTypeFilter)
                {
                    if (cargoTypeFilter == "fragile")
                    {
                        
                        double truckAverageTirePresure = truck.Tires.Min( x=> x.TirePresure);

                        if (truckAverageTirePresure < 1)
                        {
                            Console.WriteLine(truck.Model);
                        }
                    }
                    else if (cargoTypeFilter == "flamable")
                    {
                        if (truck.Engine.EnginePower > 250)
                        {
                            Console.WriteLine(truck.Model);
                        }
                    }
                }
            }
        }
    }
}
