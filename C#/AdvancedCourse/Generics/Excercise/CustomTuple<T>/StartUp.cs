namespace CustomTuple
{
    using System;
    using System.Linq;
    using System.Diagnostics;

    public class StartUp
    {
        public static void Main()
        {
            string[] adressAndName = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            string address = string.Join(" ", adressAndName, 2, adressAndName.Length - 2);
            string name = string.Join(" ", adressAndName, 0, 2);

            GenericTuple<string, string> nameAndAddressTuple = new GenericTuple<string, string>(name, address);
            Console.WriteLine($"{nameAndAddressTuple.Item1} -> {nameAndAddressTuple.Item2}");

            string[] nameAndBeer = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            string drinkerName = nameAndBeer[0];
            int beerDrank = int.Parse(nameAndBeer[1]);

            GenericTuple<string, int> nameAndBeerTuple = new GenericTuple<string, int>(drinkerName, beerDrank);
            Console.WriteLine($"{nameAndBeerTuple.Item1} -> {nameAndBeerTuple.Item2}");

            string[] numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            int integer = int.Parse(numbers[0]);
            double floatingNum = double.Parse(numbers[1]);

            GenericTuple<int, double> numbersTuple = new GenericTuple<int, double>(integer, floatingNum);
            Console.WriteLine($"{numbersTuple.Item1} -> {numbersTuple.Item2}");
        }
    }
}
