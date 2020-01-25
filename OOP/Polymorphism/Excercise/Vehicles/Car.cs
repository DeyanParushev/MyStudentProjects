namespace Vehicles
{
    public class Car : Vehicle
    {
        public Car(double fuelQuantity, double fuelConsumption) 
            : base(fuelQuantity, fuelConsumption)
        {
            base.FuelConsumption = fuelConsumption + 0.9;
        }
    }
}
