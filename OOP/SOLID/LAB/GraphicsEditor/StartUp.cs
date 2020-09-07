namespace P02.Graphic_Editor
{
    public class StartUp
    {
        public static void Main()
        {
            IShape shape = new Square();
            System.Console.WriteLine(shape.Draw());
        }
    }
}
