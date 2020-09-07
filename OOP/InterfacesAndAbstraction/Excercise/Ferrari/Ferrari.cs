namespace Ferrari
{
    public class Ferrari : ICar
    {
        private string model = "488-Spider";

        public Ferrari(string driversName)
        {
            this.Driver = driversName;
        }

        public string Driver { get; private set; }

        public string Model { get => this.model; private set => this.model = value; }

        public string Brakes()
        {
            return "Brakes!";
        }

        public string Gas()
        {
            return "Gas!";
        }

        public override string ToString()
        {
            return $"{this.Model}/{this.Brakes()}/{this.Gas()}/{this.Driver}";
        }
    }
}
