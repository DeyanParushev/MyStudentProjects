namespace Shapes
{
    public class StartUp
    {
        public static void Main()
        {
            IDrawable shape = new Rectangle(5, 4);

            shape.Draw();
        }
    }
}
