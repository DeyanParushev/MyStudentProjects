namespace DefiningClasses
{
    using System.Collections.Generic;
    using System.Linq;

    public class Family
    {
        private List<Person> family;

        public Family()
        {
            this.family = new List<Person>();
        }

        public void AddMember(Person person)
        {
            this.family.Add(person);
        }
    }
}
        
