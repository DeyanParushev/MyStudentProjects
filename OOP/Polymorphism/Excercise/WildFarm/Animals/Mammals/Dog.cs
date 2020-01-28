namespace WildFarm
{
    using System;

    public class Dog : Mammal
    {
        public Dog(string name, double weight, string livingRegion) 
            : base(name, weight, livingRegion)
        {
        }

        public override void AskForFood()
        {
            Console.WriteLine("Woof!");
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
                base.Weight += 0.4 * foodQuantity;
            }
        }
    }
}
