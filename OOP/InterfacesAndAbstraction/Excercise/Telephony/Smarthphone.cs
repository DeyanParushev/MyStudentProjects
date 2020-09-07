namespace Telephony
{
    using System;
    using System.Linq;

    public class Smartphone : IBrowser, ICallable
    {
        public void Browse(string url)
        {
            char[] urlSymbols = url.ToCharArray();

            if (urlSymbols.Any(x => char.IsDigit(x)))
            {
                Console.WriteLine("Invalid URL!");
            }
            else
            {
                Console.WriteLine($"Browsing: {url}!");
            }
        }

        public void Call(string number)
        {
            char[] phoneSymbols = number.ToCharArray();

            if (phoneSymbols.Any(x => !char.IsDigit(x)))
            {
                Console.WriteLine("Invalid number!");
            }
            else
            {
                Console.WriteLine($"Calling... {number}");
            }
        }
    }
}
