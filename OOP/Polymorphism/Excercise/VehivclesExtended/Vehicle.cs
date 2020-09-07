namespace Vehicles
{
    using System;

    public class Vehicle
    {
        private double tankCapacity;
        private double fuel;

        public Vehicle(double fuelQuantity, double fuelConsupmtion, double tankCapacity)
        {
            this.Fuel = fuelQuantity;
            this.FuelConsumption = fuelConsupmtion;
            this.TankCapacity = tankCapacity;

            if (this.Fuel > this.TankCapacity)
            {
                this.Fuel = 0;
            }
        }

        public double Fuel
        {
            get => this.fuel;

            protected set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Fuel must be a positive number");
                }

                this.fuel = value;
            }
        }

        protected double TankCapacity
        {
            get => this.tankCapacity;

            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Fuel must be a positive number");
                }

                this.tankCapacity = value;
            }
        }

        protected double FuelConsumption { get; set; }

        public virtual void Drive(double distance)
        {
            bool isFuelEnough = this.Fuel >= this.FuelConsumption * distance;

            if (isFuelEnough)
            {
                Console.WriteLine($"{this.GetType().Name} travelled {distance} km");

                this.Fuel -= this.FuelConsumption * distance;
            }
            else
            {
                Console.WriteLine($"{this.GetType().Name} needs refueling");
            }
        }

        public virtual void Refuel(double liters)
        {
            if (liters <= 0)
            {
                throw new ArgumentException("Fuel must be a positive number");
            }

            if (this.Fuel + liters > this.TankCapacity)
            {
                throw new ArgumentException($"Cannot fit {liters} fuel in the tank");
            }

            this.Fuel += liters;
        }

        public override string ToString()
        {
            return $"{this.GetType().Name}: {this.Fuel:f2}";
        }
    }
}
