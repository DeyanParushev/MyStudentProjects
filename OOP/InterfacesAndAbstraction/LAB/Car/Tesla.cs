namespace Cars
{
    using System;

    public class Tesla : ICar, IElectricCar
    {
        private string model;
        private string color;
        private int batteries;

        public Tesla(string model, string color, int battery)
        {
            this.Model = model;
            this.Color = color;
            this.Battery = battery;
        }

        public string Model
        {
            get => this.model;

            private set => this.model = value;
        }

        public string Color
        {
            get => this.color;

            private set => this.color = value;
        }

        public int Battery
        {
            get => this.batteries;

            private set
            {
                if (value > 0)
                {
                    this.batteries = value;
                }
                else
                {
                    throw new ArgumentException("Bateries number should be positive");
                }
            }
        }

        public string Start()
        {
            return "Engine start";
        }

        public string Stop()
        {
            return "Breaaak!";
        }

        public override string ToString()
        {
            return $"{this.Color} {this.GetType().Name} {this.model} with {this.Battery} Batteries";
        }
    }
}
