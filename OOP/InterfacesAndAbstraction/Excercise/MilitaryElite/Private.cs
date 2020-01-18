namespace MilitaryElite
{
    public class Private : IPrivate
    {
        private string id;
        private string firstName;
        private string lastName;
        private decimal salary;

        public Private(string id, string firstName, string lastName, decimal salary)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Salary = salary;
        }

        public string Id { get => this.id; private set => this.id = value; }

        public string FirstName { get => this.firstName; private set => this.firstName = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }

        public decimal Salary { get => this.salary; private set => this.salary = value; }
    }
}
