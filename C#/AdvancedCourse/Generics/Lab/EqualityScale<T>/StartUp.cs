namespace GenericScale
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            EqualityScale<int> scale = new EqualityScale<int>(5, 5);

            Console.WriteLine(scale.AreEqual());
        }
    }
}
