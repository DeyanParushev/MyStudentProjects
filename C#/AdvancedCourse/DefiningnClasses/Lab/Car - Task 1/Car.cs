namespace DefiningClasses
{
    using System;

    public class Car
    {
        private string model;
        private double fuelAmount;
        private double fuelConsumptionPerKilometer;
        private double traveledDistance = 0;

        public Car(string model, double fuelAmount, double fuelConsumption)
        {
            this.Model = model;
            this.FuelAmount = fuelAmount;
            this.FuelConsumptionPerKilometer = fuelConsumption;
        }

        public string Model { get => this.model; set => this.model = value; }
        public double FuelAmount { get => this.fuelAmount; set => this.fuelAmount = value; }
        public double FuelConsumptionPerKilometer { get => this.fuelConsumptionPerKilometer; set => this.fuelConsumptionPerKilometer = value; }
        public double TraveledDistance { get => this.traveledDistance; set => this.traveledDistance = value; }

        public void Drive(double distance)
        {
            if (distance * this.fuelConsumptionPerKilometer > this.fuelAmount)
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
            else
            {
                this.traveledDistance += distance;
                this.fuelAmount -= distance * this.fuelConsumptionPerKilometer;
            }
        }
    }
}
