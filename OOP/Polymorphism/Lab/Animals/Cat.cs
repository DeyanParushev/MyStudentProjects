namespace Animals
{
    using System;

    public class Cat : Animal
    {
        protected Cat(string name, string favoriteFood) 
            : base(name, favoriteFood)
        {
        }

        public override string ExplainSelf()
        {
            return base.ExplainSelf() + Environment.NewLine + " MEEOW";
        }
    }
}
