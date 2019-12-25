namespace AquaShop.Models.Aquariums
{
    using System;
    using System.Linq;
    using AquaShop.Models.Fish.Contracts;

    public class FreshwaterAquarium : Aquarium
    {
        public FreshwaterAquarium(string name)
            : base(name, 50)
        {
        }

        public override void AddFish(IFish fish)
        {
            if (base.Fish.Count < base.Capacity)
            {
                base.Fish.Add(fish);
            }
            else
            {
                throw new InvalidOperationException($"Not enough capacity.");
            }
        }

        public override bool RemoveFish(IFish fish)
        {
            IFish fish1 = base.Fish.FirstOrDefault(x => x.Name == fish.Name);

            if (fish1 != null)
            {
                base.Fish.Remove(fish1);
                return true;
            }

            return false;
        }
    }
}
