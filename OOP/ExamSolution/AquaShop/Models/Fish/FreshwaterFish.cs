namespace AquaShop.Models.Fish
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class FreshwaterFish : Fish
    {
        public FreshwaterFish(string name, string species, decimal price)
            : base(name, species, price)
        {
            base.Size = 3;
        }

        public override void Eat()
        {
            base.Size += 3;
        }
    }
}
