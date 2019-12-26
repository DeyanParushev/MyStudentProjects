namespace AquaShop.Models.Decorations
{
    using System;
    using AquaShop.Models.Decorations.Contracts;

    public class Decoration : IDecoration, IComparable<IDecoration>, IEquatable<IDecoration>
    {
        private int comfort;
        private decimal price;

        public Decoration(int comfort, decimal price)
        {
            this.Comfort = comfort;
            this.Price = price;
        }

        public decimal Price
        {
            get => this.price;

            private set
            {
                if (value < 0)
                {
                    /// check if there should be no exception
                    throw new ArgumentException();
                }

                this.price = value;
            }
        }

        public int Comfort
        {
            get => this.comfort;

            private set
            {
                if (value < 0)
                {
                    /// check if there should be no exception
                    throw new ArgumentException();
                }

                this.comfort = value;
            }
        }

        public int CompareTo(IDecoration other)
        {
            return this.Price.CompareTo(other.Price);
        }

        public bool Equals(IDecoration other)
        {
            if (this.Price == other.Price)
            {
                if (this.Comfort == other.Comfort)
                {
                    return true;
                }
            }

            return false;
        }
    }
}
