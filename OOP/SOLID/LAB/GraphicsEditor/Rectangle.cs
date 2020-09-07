namespace P02.Graphic_Editor
{
    public class Rectangle : IShape
    {
        public string Draw()
        {
            string drawnShape = string.Empty;

            for (int i = 0; i < 5; i++)
            {
                drawnShape += new string('*', 10);
            }

            return drawnShape;
        }
    }
}
