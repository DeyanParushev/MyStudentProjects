namespace Threeuple
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            string[] nameInfo = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            string name = string.Join(" ", nameInfo, 0, 2);
            string addres = nameInfo[2];
            string city = string.Join(" ", nameInfo, 3, nameInfo.Length - 3);

            Threeuple<string, string, string> nameAddres = new Threeuple<string, string, string>(name, addres, city);

            string[] secondLine = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            string drunkName = secondLine[0];
            int beerLiters = int.Parse(secondLine[1]);
            bool drunk = false;

            if (secondLine[2] == "drunk")
            {
                drunk = true;
            }

            Threeuple<string, int, bool> secondInput = new Threeuple<string, int, bool>(drunkName, beerLiters, drunk);

            string[] thirdInput = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);

            string accountHolder = thirdInput[0];
            double accountBalance = double.Parse(thirdInput[1]);
            string bankName = thirdInput[2];

            Threeuple<string, double, string> thirdLine = new Threeuple<string, double, string>(accountHolder, accountBalance, bankName);

            Console.WriteLine(nameAddres.Print());
            Console.WriteLine(secondInput.Print());
            Console.WriteLine(thirdLine.Print());
        }
    }
}
