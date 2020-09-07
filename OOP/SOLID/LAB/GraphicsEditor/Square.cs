namespace P02.Graphic_Editor
{
    public class Square : IShape
    {
        public string Draw()
        {
            string output = string.Empty;

            for (int i = 0; i < 5; i++)
            {
                string row = new string('*', 5);
                output += row;
            }

            return output;
        }
    }
}
