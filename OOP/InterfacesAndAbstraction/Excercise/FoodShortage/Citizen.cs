namespace FoodShortage
{
    public class Citizen : IBuyer
    {
        private string name;
        private int age;
        private string id;
        private string birthdate;
        private int food = 0;

        public Citizen(string name, int age, string id, string birthdate)
        {
            this.Name = name;
            this.Age = age;
            this.Id = id;
            this.Birthdate = birthdate;
        }

        public string Name { get => this.name; private set => this.name = value; }

        public int Age { get => this.age; private set => this.age = value; }

        public string Id { get => this.id; private set => this.id = value; }

        public string Birthdate { get => this.birthdate; private set => this.birthdate = value; }

        public int Food { get => this.food; }

        public void BuyFood()
        {
            this.food += 10;
        }
    }
}
