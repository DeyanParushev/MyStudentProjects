namespace Vehicles
{
    using System;

    public class Bus : Vehicle
    {
        private double emptyFuelConsumption;

        public Bus(double fuelQuantity, double fuelConsupmtion, double tankCapacity)
            : base(fuelQuantity, fuelConsupmtion, tankCapacity)
        {
            this.emptyFuelConsumption = fuelConsupmtion;
            this.FuelConsumption = base.FuelConsumption + 1.4;
        }

        public void DriveEmpty(double distance)
        {
            bool isFuelEnough = this.Fuel > this.emptyFuelConsumption * distance;

            if (isFuelEnough)
            {
                Console.WriteLine($"{this.GetType().Name} travelled {distance} km");

                this.Fuel -= this.emptyFuelConsumption * distance;
            }
            else
            {
                Console.WriteLine($"{this.GetType().Name} needs refueling");
            }
        }
    }
}
