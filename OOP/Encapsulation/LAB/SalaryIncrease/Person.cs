namespace PersonsInfo
{
    public class Person
    {
        private string name;
        private string lastName;
        private int age;
        private decimal salary;

        public Person(string name, string lastName, int age, decimal salary)
        {
            this.Name = name;
            this.LastName = lastName;
            this.Age = age;
            this.Salary = salary;
        }

        public string Name { get => this.name; private set => this.name = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }

        public int Age { get => this.age; private set => this.age = value; }

        public decimal Salary { get => this.salary; private set => this.salary = value; }

        public void IncreaseSalary(decimal percentage)
        {
            if (this.Age > 30)
            {
                this.Salary += this.Salary * percentage / 100;
            }
            else
            {
                this.Salary += this.Salary * percentage / 200;
            }
        }

        public override string ToString()
        {
            string output = $"{this.Name} {this.LastName} recieves {this.Salary} leva.";
            return output;
        }
    }
}
