namespace WildFarm
{
    using System;

    public class Mice : Mammal
    {
        public Mice(string name, double weight, string livingRegion) 
            : base(name, weight, livingRegion)
        {
        }

        public override void AskForFood()
        {
            Console.WriteLine("Squeak");
        }

        public override void EatFood(Food foodType, int foodQuantity)
        {
            if (foodType.GetType().Name != "Vegetable" && foodType.GetType().Name != "Fruit")
            {
                Console.WriteLine($"{this.GetType().Name} does not eat {foodType.GetType().Name}!");
            }
            else
            {
                base.FoodEaten += foodQuantity;
                base.Weight += 0.1 * foodQuantity;
            }
        }

        public override string ToString()
        {
            return $"Mouse [{this.Name}, {this.Weight}, {this.LivingRegion}, {this.FoodEaten}]";
        }
    }
}
