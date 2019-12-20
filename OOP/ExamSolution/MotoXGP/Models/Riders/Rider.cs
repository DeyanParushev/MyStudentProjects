namespace MXGP.Models.Riders.Contracts
{
    using MXGP.Models.Motorcycles.Contracts;
    using System;

    public class Rider : IRider, IComparable<IRider>
    {
        private string name;
        private IMotorcycle motorcycle = null;
        private int numberOfWins = 0;

        public Rider(string name)
        {
            this.Name = name;
        }

        public string Name
        {
            get => this.name;

            private set
            {
                if (string.IsNullOrEmpty(value) || value.Length < 5)
                {
                    throw new ArgumentException($"Name {value} cannot be less than 5 symbols.");
                }

                this.name = value;
            }
        }

        public IMotorcycle Motorcycle
        {
            get => this.motorcycle;

            private set => this.motorcycle = value;
        }

        public int NumberOfWins => this.numberOfWins;

        public bool CanParticipate
        {
            get
            {
                if (this.motorcycle == null)
                {
                    return false;
                }

                return true;
            }
        }

        public void AddMotorcycle(IMotorcycle motorcycle)
        {
            if (motorcycle == null)
            {
                throw new ArgumentNullException($"Motorcycle cannot be null.");
            }

            this.Motorcycle = motorcycle;
        }

        public void WinRace()
        {
            this.numberOfWins++;
        }

        public override int GetHashCode()
        {
            int hashCode = this.name.Length * 153 + this.Name[this.Name.Length - 1] * 1868861 + 3 * 898430;

            return hashCode;
        }

        public int CompareTo(IRider other)
        {
            return this.Name.CompareTo(other.Name);
        }
    }
}
