namespace Queries
{
    public class Minion
    {
        public Minion(int id, string name, int age) 
        {
            this.Id = id;
            this.Name = name;
            this.Age = age;
        }

        public int Id { get; private set; }

        public string Name { get; private set; }

        public int Age { get; private set; }
    }
}
