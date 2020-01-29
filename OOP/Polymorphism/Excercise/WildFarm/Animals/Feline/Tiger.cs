namespace WildFarm
{
    using System;

    public class Tiger : Feline
    {
        public Tiger(string name, double weight, string livingRegion, string breed)
            : base(name, weight, livingRegion, breed)
        {
        }

        public override void AskForFood()
        {
            Console.WriteLine("ROAR!!!");
        }

        public override void EatFood(Food foodType, int foodQuantity)
        {
            if (foodType.GetType().Name != "Meat")
            {
                Console.WriteLine($"{this.GetType().Name} does not eat {foodType.GetType().Name}!");
            }
            else
            {
                base.FoodEaten += foodQuantity;
                base.Weight += foodQuantity;
            }
        }
    }
}
