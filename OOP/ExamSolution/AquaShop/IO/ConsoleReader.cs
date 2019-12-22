namespace AquaShop.IO
{
    using System;
    using AquaShop.IO.Contracts;

    public class ConsoleReader : IReader
    {
        public string ReadLine()
        {
            return Console.ReadLine();
        }
    }
}
