namespace CarSalesMan
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            int enginesNumber = int.Parse(Console.ReadLine());

            List<Engine> engines = EnlistEngines(enginesNumber);

            int carsNumber = int.Parse(Console.ReadLine());

            List<Car> cars = EnlistCars(carsNumber, engines);

            foreach (Car vehicule in cars)
            {
                Console.WriteLine(vehicule.PrintCar());
            }
        }

        public static Tuple<string, string> GetLastTwoArguments (string[] inputData)
        {
            string thirdArgumentFromArray = null;
            string fourthArgumentFromArray = null;

            switch (inputData.Length)
            {
                case 2:

                    thirdArgumentFromArray = null;
                    fourthArgumentFromArray = null;

                    break;

                case 3:

                    if (char.IsDigit(inputData[2][0]))
                    {
                        thirdArgumentFromArray = inputData[2];
                    }
                    else
                    {
                        fourthArgumentFromArray = inputData[2];
                    }

                    break;

                case 4:

                    thirdArgumentFromArray = inputData[2];
                    fourthArgumentFromArray = inputData[3];

                    break;
            }

            Tuple<string, string> outputTuple = new Tuple<string, string>(thirdArgumentFromArray, fourthArgumentFromArray);

            return outputTuple;
        }

        private static List<Engine> EnlistEngines(int enginesNumber)
        {
            List<Engine> engines = new List<Engine>();

            for (int i = 0; i < enginesNumber; i++)
            {
                string[] inputInfo = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);

                string engineModel = inputInfo[0];
                string enginePower = inputInfo[1];

                string engineDisplacement = GetLastTwoArguments(inputInfo).Item1;
                string engineEfficiency = GetLastTwoArguments(inputInfo).Item2;

                Engine newEngine = new Engine(engineModel, enginePower, engineDisplacement, engineEfficiency);

                engines.Add(newEngine);
            }

            return engines;
        }

        public static List<Car> EnlistCars(int carsNumber, List<Engine> engines)
        {
            List<Car> cars = new List<Car>();

            for (int i = 0; i < carsNumber; i++)
            {
                string[] inputInfo = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries);

                string carModel = inputInfo[0];
                Engine carEngine = engines.
                    Find(x => x.Model == inputInfo[1]);

                string weight = GetLastTwoArguments(inputInfo).Item1;
                string color = GetLastTwoArguments(inputInfo).Item2;

                Car newCar = new Car(carModel, carEngine, weight, color);

                cars.Add(newCar);
            }

            return cars;
        }
    }
}
