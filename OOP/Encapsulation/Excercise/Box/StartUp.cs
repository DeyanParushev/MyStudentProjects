namespace BoxData
{
    using System;

    public class Program
    {
        public static void Main()
        {
            double lenght = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());

            try
            {
                Box box = new Box(lenght, width, height);

                Console.WriteLine(box.ToString());
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
