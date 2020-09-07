namespace Restaurant.FoodProducts
{
    public class Fish : MainDish
    {
        private const double grams = 22;

        public Fish(string name, decimal price)
            : base(name, price, 0)
        {

        }

        public override double Grams { get => grams; }
    }
}
