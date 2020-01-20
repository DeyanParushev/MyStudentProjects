namespace MilitaryElite
{
    using System;

    public class SpecialSondier : ISpecialSoldier
    {
        private string id;
        private string firstName;
        private string lastName;
        private string corps;

        public SpecialSondier(string id, string firstName, string lastName, string corps)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Corps = corps;
        }

        public string Id { get => this.id; private set => this.id = value; }

        public string FirstName { get => this.firstName; private set => this.firstName = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }

        public string Corps
        {
            get => this.corps;

            private set
            {
                if (value != "Airforce" || value != "Marines")
                {
                    throw new ArgumentException();
                }

                this.corps = value;
            }
        }
    }
}
