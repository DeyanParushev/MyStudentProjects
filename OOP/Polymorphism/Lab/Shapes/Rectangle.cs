namespace Shapes
{
    using System.Text;

    public class Rectangle : Shape
    {
        private double height;
        private double width;

        public Rectangle(double height, double width)
        {
            this.Height = height;
            this.Width = width;
        }

        public double Height { get => this.height; private set => this.height = value; }

        public double Width { get => this.width; private set => this.width = value; }

        public override double CalculatePerimeter()
        {
            return this.Height * 2 + this.Width * 2;
        }

        public override double ClaculateArea()
        {
            return this.Width * this.Height;
        }

        public override string Draw()
        {
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < this.Height; i++)
            {
                string line = new string('*', (int) this.Width);
                sb.AppendLine(line);
            }

            return sb.ToString();
        }
    }
}
