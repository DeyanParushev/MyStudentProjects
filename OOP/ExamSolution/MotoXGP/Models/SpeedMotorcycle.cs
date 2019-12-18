namespace MXGP.Models.Motorcycles
{
    using MXGP.Models.Motorcycles.Contracts;
    using System;

    public class SpeedMotorcycle : Motorcycle, IMotorcycle
    {
        public SpeedMotorcycle(string model, int horsePower)
            : base(model, horsePower, 125)
        {
        }

        public override int HorsePower
        {
            get => base.HorsePower;

            protected set
            {
                if (value < 50 || value > 69)
                {
                    throw new ArgumentException($"Invalid horse power: {value}.");
                }

                base.HorsePower = value;
            }
        }
    }
}
