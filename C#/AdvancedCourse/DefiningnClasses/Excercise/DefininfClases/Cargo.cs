namespace DefiningClasses
{
    public class Cargo
    {
        private int cargoWeight;
        private string cargoType;

        public int CargoWeight { get => this.cargoWeight; set => this.cargoWeight = value; }

        public string CargoType { get => this.cargoType; set => this.cargoType = value; }
    }
}
