namespace Vehicles
{
    public class Vehicle
    {
        private double fuelQuantity;
        private double fuelConsumption;

        public Vehicle(double fuelQuantity, double fuelConsumption)
        {
            this.FuelQuantity = fuelQuantity;
            this.FuelConsumption = fuelConsumption;
        }

        public double FuelQuantity { get => this.fuelQuantity; private set => this.fuelQuantity = value; }

        public double FuelConsumption { get => this.fuelConsumption; protected set => this.fuelConsumption = value; }

        public string Drive(double distance)
        {
            double fuelForDrive = distance * this.FuelConsumption;

            if (fuelForDrive < this.FuelQuantity)
            {
                this.FuelQuantity -= fuelForDrive;
                return $"{this.GetType().Name} travelled {distance} km";
            }
            else
            {
                return $"{this.GetType().Name} needs refueling";
            }
        }

        public virtual void Refuel(double fuelAmount)
        {
            this.FuelQuantity += fuelAmount;
        }

        public override string ToString()
        {
            return $"{this.GetType().Name}: {this.FuelQuantity:F2}";
        }
    }
}
