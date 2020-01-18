namespace MilitaryElite
{
    public class Soldier : ISoldier
    {
        private string id;
        private string firstName;
        private string lastName;

        public Soldier(string id, string firstName, string lastName)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string Id { get => this.id; private set => this.id = value; }

        public string FirstName { get => this.firstName; private set => this.firstName = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }
    }
}
