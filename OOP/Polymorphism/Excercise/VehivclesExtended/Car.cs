namespace Vehicles
{
    using System;

    public class Car : Vehicle
    {
        public Car(double fuel, double fuelConsumption, double tankCapacity)
            : base(fuel, fuelConsumption, tankCapacity)
        {
            this.FuelConsumption = base.FuelConsumption + 0.9;
        }

        public override void Drive(double distance)
        {
            base.Drive(distance);
        }

        public override string ToString()
        {
            return $"{this.GetType().Name}: {this.Fuel:f2}";
        }
    }
}
