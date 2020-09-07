namespace CustomStack
{
    using System;
    using System.Linq;

    public class StartUp // task 2
    {
        public static void Main()
        {
            string[] inputLine = Console.ReadLine()
                .Split(", ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

            long[] inputParams = inputLine
                .Select(long.Parse)
                .Skip(1)
                .ToArray();

            CustomStack<long> customStack = new CustomStack<long>(inputParams);
            string commandInput = inputLine[0];

            int firstIteration = 0;

            while (commandInput != "END")
            {
                string[] splittedCommand = commandInput.Split(' ');
                string command = splittedCommand[0];

                if (command == "Push")
                {
                    if (firstIteration == 0)
                    {
                        firstIteration++;
                        commandInput = Console.ReadLine();
                        continue;
                    }

                    long number = long.Parse(splittedCommand[1]);
                    customStack.Push(number);
                }
                else if (command == "Pop")
                {
                    customStack.Pop();
                }

                commandInput = Console.ReadLine();
            }

            foreach (var number in customStack)
            {
                Console.WriteLine(number);
            }

            foreach (var number in customStack)
            {
                Console.WriteLine(number);
            }
        }
    }
}
