namespace GenericBoxOfString
{
    using System;

    public class Program
    {
        public static void Main()
        {
            int boxes = int.Parse(Console.ReadLine());

            Box<double> box = new Box<double>();

            for (int i = 0; i < boxes; i++)
            {
                box.Add(double.Parse(Console.ReadLine()));
            }

            double comparedValue = double.Parse(Console.ReadLine());

            Console.WriteLine(box.GenericCount(comparedValue));
        }
    }
}
