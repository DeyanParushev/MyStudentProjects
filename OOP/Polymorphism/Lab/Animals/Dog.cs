namespace Animals
{
    using System;

    public class Dog : Animal
    {
        protected Dog(string name, string favoriteFood)
            : base(name, favoriteFood)
        {
        }

        public override string ExplainSelf()
        {
            return base.ExplainSelf() + Environment.NewLine + " DJAAF";
        }
    }
}