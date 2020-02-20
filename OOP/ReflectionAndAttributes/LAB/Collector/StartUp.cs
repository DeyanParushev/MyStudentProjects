namespace Stealer
{
    using System;

    public class Program
    {
        public static void Main()
        {
            Spy spy = new Spy();
            Console.WriteLine(spy.CollectGettersAndSetters("Hacker"));
        }
    }
}
