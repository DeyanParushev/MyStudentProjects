namespace Shapes
{
    using System;

    public class StartUp
    {
        static void Main()
        {
            Shape rectangle = new Rectangle(5, 10);
            Shape circel = new Circle(7);

            Console.WriteLine(rectangle.Draw());
            Console.WriteLine(circel.Draw());
        }
    }
}
