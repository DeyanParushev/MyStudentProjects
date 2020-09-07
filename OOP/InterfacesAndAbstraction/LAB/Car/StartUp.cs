namespace Cars
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            IElectricCar car = new Tesla("Model 3", "red", 2);

            Console.WriteLine(car.ToString());
        }
    }
}
