namespace CarSalesMan
{
    using System.Text;

    public class Car
    {
        private string model;
        private Engine engine;
        private string weight;
        private string color;

        public Car(string model, Engine engine, string weight, string color)
        {
            this.Engine = engine;
            this.Model = model;
            this.Weight = weight;
            this.Color = color;
        }

        public string Color
        {
            get { return color; }
            set
            {
                if (value != null)
                {
                    this.color = value;
                }
                else
                {
                    this.color = "n/a";
                }
            }
        }

        public string Weight
        {
            get { return this.weight; }
            set
            {
                if (value != null)
                {
                    this.weight = value;
                }
                else
                {
                    this.weight = "n/a";
                }
            }
        }

        public Engine Engine
        {
            get { return this.engine; }
            set { this.engine = value; }
        }

        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }

        public string PrintCar()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"{this.Model}:");
            sb.AppendLine($"{this.Engine.PrintEngine()}");
            sb.AppendLine($"  Weight: {this.Weight}");
            sb.Append($"  Color: {this.Color}");

            return sb.ToString();
        }
    }
}
