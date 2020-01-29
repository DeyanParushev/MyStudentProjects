namespace WildFarm
{
    public class Cat : Feline
    {
        public Cat(string name, double weight, string livingRegion, string breed) 
            : base(name, weight, livingRegion, breed)
        {
        }

        public override void AskForFood()
        {
            System.Console.WriteLine("Meow");
        }

        public override void EatFood(Food foodType, int foodQuantity)
        {
            if (foodType.GetType().Name != "Vegetable" && foodType.GetType().Name != "Meat")
            {
                System.Console.WriteLine($"{this.GetType().Name} does not eat {foodType.GetType().Name}!");
            }
            else
            {
                base.FoodEaten += foodQuantity;
                base.Weight += 0.3 * foodQuantity;
            }
        }
    }
}
