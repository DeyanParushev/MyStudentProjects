namespace MXGP.Models.Motorcycles
{
    using MXGP.Models.Motorcycles.Contracts;
    using System;

    public abstract class Motorcycle : IMotorcycle, IComparable<IMotorcycle>, IComparable
    {
        private string model;
        private int horsePower;
        private double cubicCentimeters;

        public Motorcycle(string model, int horsePower, double cubicCentimeters)
        {
            this.Model = model;
            this.CubicCentimeters = cubicCentimeters;
            this.HorsePower = horsePower;
        }

        public string Model
        {
            get => this.model;

            private set
            {
                if (string.IsNullOrEmpty(value) || value.Length < 4)
                {
                    throw new ArgumentException($"Model {value} cannot be less than 4 symbols.");
                }

                this.model = value;
            }
        }

        public virtual int HorsePower
        {
            get => this.horsePower;

            protected set => this.horsePower = value;
        }

        public double CubicCentimeters
        {
            get => this.cubicCentimeters;

            private set => this.cubicCentimeters = value;
        }

        public double CalculateRacePoints(int laps)
        {
            return this.CubicCentimeters / this.HorsePower * laps;
        }

        public int CompareTo(IMotorcycle other)
        {
            return this.Model.CompareTo(other.Model);
        }

        public int CompareTo(object obj)
        {
            IMotorcycle motorcycle = obj as IMotorcycle;

            return this.model.CompareTo(motorcycle.Model);
        }

        public override int GetHashCode()
        {
            return this.model[0] * 898 + this.model[this.model.Length - 1] * 783156 + 7 * 391461 + this.HorsePower;
        }
    }
}
