namespace Shapes
{
    using System;

    public class Rectangle : IDrawable
    {
        private int height;
        private int width;

        public Rectangle(int height, int width)
        {
            this.Height = height;
            this.Width = width;
        }

        public int Height
        {
            get => this.height;

            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Height should be a positive number");
                }

                this.height = value;
            }
        }

        public int Width
        {
            get => width;

            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Width should be a positive number");
                }

                this.width = value;
            }
        }

        public void Draw()
        {
            for (int i = 0; i < this.Height; i++)
            {
                for (int j = 0; j < this.width; j++)
                {
                    Console.Write("* ");
                }

                Console.WriteLine();
            }
        }
    }
}
