namespace NeedForSpeed
{
    public class Motorcycle : Vehicle
    {
        public Motorcycle(int horsePower, double fuel)
            :base(horsePower, fuel)
        {
            this.HorsePower = horsePower;
            this.Fuel = fuel;
        }

        public override double FuelConsumption => base.FuelConsumption;

        public override void Drive(double kilometers)
        {
            base.Drive(kilometers);
        }
    }
}
