namespace BirthDayCelebration
{
    public class Citizen : IIdentifiable, IBirthable
    {
        private string name;
        private string id;
        private int age;
        private string birthDate;

        public Citizen(string name, int age, string id, string birthDate)
        {
            this.Name = name;
            this.Age = age;
            this.Id = id;
            this.Birthdate = birthDate;
        }

        public string Name { get => this.name; private set => this.name = value; }

        public int Age { get => this.age; private set => this.age = value; }

        public string Id { get => this.id; private set => this.id = value; }

        public string Birthdate { get => this.birthDate; private set => this.birthDate = value; }
    }
}
