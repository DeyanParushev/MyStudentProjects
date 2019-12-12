namespace Person
{
    using System;

    public class Child : Person
    {
        public Child(string name, int age)
            : base(name, age)
        {
            this.Name = name;
            this.Age = age;
        }

        public override int Age
        {
            get
            {
                return base.Age;
            }
            set
            {
                if (value > 15)
                {
                    throw new ArgumentException();
                }
                else
                {
                    base.Age = value;
                }
            }
        }
    }
}

