namespace Vehicles
{
    using System;

    public class Truck : Vehicle
    {
        public Truck(double fuel, double fuelConsumption, double tankCapacity)
            : base(fuel, fuelConsumption, tankCapacity)
        {
            this.FuelConsumption = base.FuelConsumption + 1.6;
        }

        public override void Drive(double distance)
        {
            base.Drive(distance);
        }

        public override void Refuel(double liters)
        {
            if (liters <= 0)
            {
                throw new ArgumentException("Fuel must be a positive number");
            }

            try
            {
                base.Refuel(liters * 0.95);
            }
            catch
            {
                throw new ArgumentException($"Cannot fit {liters} fuel in the tank");
            }
        }
    }
}
