namespace CarSalesMan
{
    using System.Text;

    public class Engine
    {
        private string model;
        private string power;
        private string displacement;
        private string efficiency;

        public Engine(string model, string power, string displacement, string efficiency)
        {
            this.Model = model;
            this.Power = power;
            this.Displacement = displacement;
            this.Efficiency = efficiency;
        }

        public string Efficiency
        {
            get { return this.efficiency; }
            set
            {
                if (value != null)
                {
                    this.efficiency = value;
                }
                else
                {
                    this.efficiency = "n/a";
                }
            }
        }

        public string Displacement
        {
            get { return this.displacement; }
            set
            {
                if (value != null)
                {
                    this.displacement = value;
                }
                else
                {
                    this.displacement = "n/a";
                }
            }
        }

        public string Power
        {
            get { return this.power; }
            set { this.power = value; }
        }

        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }

        public StringBuilder PrintEngine()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"  {this.Model}:");
            sb.AppendLine($"    Power: {this.Power}");
            sb.AppendLine($"    Displacement: {this.Displacement}");
            sb.Append($"    Efficiency: {this.Efficiency}");

            return sb;
        }
    }
}
