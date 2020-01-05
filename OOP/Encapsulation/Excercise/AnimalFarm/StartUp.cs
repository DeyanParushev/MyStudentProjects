namespace AnimalFarm
{
    using System;
    using AnimalFarm.Models;

    public class StartUp
    {
        public static void Main()
        {
            string name = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());

            try
            {
                Chicken chicken = new Chicken(name, age);
                Console.WriteLine(
                    $"Chicken {chicken.Name} (age {chicken.Age}) can produce {chicken.ProductPerDay} eggs per day.");
            }
            catch (Exception ex)
            {
                string exceptionMessage = ex.Message;

                Console.WriteLine(exceptionMessage);
            }
        }
    }
}
