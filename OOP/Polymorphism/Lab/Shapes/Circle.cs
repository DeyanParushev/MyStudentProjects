namespace Shapes
{
    using System;
    using System.Text;

    public class Circle : Shape
    {
        private double radius;

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public double Radius { get => this.radius; private set => this.radius = value; }

        public override double CalculatePerimeter()
        {
            return Math.PI * 2 * this.Radius;
        }

        public override double ClaculateArea()
        {
            return Math.PI * this.Radius * this.Radius;
        }

        public override string Draw()
        {
            StringBuilder sb = new StringBuilder();

            for (double i = -this.Radius; i <= this.Radius; i++)
            {
                for (double j = -this.Radius; j <= this.Radius; j++)
                {
                    double distanceFromCenter = Math.Sqrt(Math.Pow(i, 2) + Math.Pow(j, 2));

                    if (distanceFromCenter >= this.Radius)
                    {
                        sb.Append("*");
                    }
                    else
                    {
                        sb.Append(" ");
                    }
                }

                sb.AppendLine();
            }

            return sb.ToString();
        }
    }
}
