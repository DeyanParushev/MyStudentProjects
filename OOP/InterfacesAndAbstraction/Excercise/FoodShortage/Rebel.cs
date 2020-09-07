namespace FoodShortage
{
    public class Rebel : IBuyer
    {
        private string name;
        private int age;
        private string group;
        private int food = 0;

        public Rebel(string name, int age, string group)
        {
            this.Name = name;
            this.Age = age;
            this.Group = group;
        }

        public string Name { get => this.name; private set => this.name = value; }

        public int Age { get => this.age; private set => this.age = value; }

        public string Group { get => this.group; private set => this.group = value; }

        public int Food { get => food; }

        public void BuyFood()
        {
            this.food += 5;
        }
    }
}
