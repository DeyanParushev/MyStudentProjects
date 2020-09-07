namespace PersonsInfo
{
    public class Person
    {
        private string name;
        private string lastName;
        private int age;

        public Person(string name, string lastName, int age)
        {
            this.Name = name;
            this.LastName = lastName;
            this.Age = age;
        }

        public string Name { get => this.name; private set => this.name = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }

        public int Age { get => this.age; private set => this.age = value; }

        public override string ToString()
        {
            string output = $"{this.Name} {this.LastName} is {this.Age} years old.";
            return output;
        }
    }
}
