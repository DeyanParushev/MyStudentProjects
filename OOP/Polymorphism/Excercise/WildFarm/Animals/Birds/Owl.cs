namespace WildFarm
{
    using System;

    public class Owl : Bird
    {
        public Owl(string name, double weight, double wingSize)
            : base(name, weight, wingSize)
        {
        }

        public override void AskForFood()
        {
            Console.WriteLine("Hoot Hoot");
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
                base.Weight += 0.25 * foodQuantity;
            }
        }
    }
}
