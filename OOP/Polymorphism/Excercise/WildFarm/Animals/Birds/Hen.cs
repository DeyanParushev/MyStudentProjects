namespace WildFarm
{
    public class Hen : Bird
    {
        public Hen(string name, double weight, double wingSize) 
            : base(name, weight, wingSize)
        {
        }

        public override void AskForFood()
        {
            System.Console.WriteLine($"Cluck");
        }

        public override void EatFood(Food foodType, int foodQuantity)
        {
            base.FoodEaten += foodQuantity;
            base.Weight += foodQuantity * 0.35;
        }
    }
}
