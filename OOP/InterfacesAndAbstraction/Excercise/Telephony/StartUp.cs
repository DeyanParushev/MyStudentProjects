namespace Telephony
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            string[] phoneNumbers = Console.ReadLine()
                                           .Split();

            string[] linksToBrowse = Console.ReadLine()
                                            .Split();

            Smartphone phone = new Smartphone();

            foreach (string number in phoneNumbers)
            {
                phone.Call(number);
            }

            foreach (string link in linksToBrowse)
            {
                phone.Browse(link);
            }
        }
    }
}
