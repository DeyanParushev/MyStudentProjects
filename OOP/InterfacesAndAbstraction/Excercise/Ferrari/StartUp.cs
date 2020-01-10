namespace Ferrari
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            string driver = Console.ReadLine();

            Ferrari ferrari = new Ferrari(driver);

            Console.WriteLine(ferrari);
        }
    }
}
