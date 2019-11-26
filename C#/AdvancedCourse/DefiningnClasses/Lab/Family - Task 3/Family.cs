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

        public Person GetOldestMemeber()
        {
            int oldestAge = family
                .Max(x => x.Age);

            Person oldestPerson = new Person();

            foreach (Person person in family)
            {
                if (person.Age == oldestAge)
                {
                    oldestPerson = person;
                    break;
                }
            }

            return oldestPerson;
        }
    }
}
