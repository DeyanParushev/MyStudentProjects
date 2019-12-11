namespace ListyIterator
{
    using System;
    using System.Linq;

    public class StartUp
    {
        public static void Main(string[] args)
        {
            string[] inputLine = Console.ReadLine()
                .Split(' ');

            string command = inputLine[0];

            string[] inputParams = inputLine
                .Skip(1)
                .ToArray();

                ListyIterator listyIterator = new ListyIterator(inputParams);

            while (command != "END")
            {
                if (command == "Move")
                {
                    Console.WriteLine(listyIterator.Move());
                }
                else if (command == "Print")
                {
                    listyIterator.Print();
                }
                else if (command == "HasNext")
                {
                    Console.WriteLine(listyIterator.HasNext());
                }
                else if (command == "PrintAll") 
                {
                    listyIterator.PrintAll();
                }

                command = Console.ReadLine();
            }
        }
    }
}
