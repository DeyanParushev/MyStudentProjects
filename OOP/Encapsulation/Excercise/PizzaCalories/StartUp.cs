namespace PizzaCalories
{
    using System;

    public class Program
    {
        public static void Main()
        {
            try
            {
                string[] pizzaInput = Console.ReadLine()
                    .Split(' ');

                string pizzaName = pizzaInput[1];

                Pizza pizza = new Pizza(pizzaName);

                string[] doughInfo = Console.ReadLine()
                    .Split(' ');

                string doughFlour = doughInfo[1];
                string bakingTechnique = doughInfo[2];
                double weight = double.Parse(doughInfo[3]);

                pizza.Dough = new Dough(doughFlour, bakingTechnique, weight);

                string command = Console.ReadLine();

                while (command != "END")
                {
                    string[] toppingInfo = command
                        .Split(' ');

                    string toppingName = toppingInfo[1];
                    double toppingWeigh = double.Parse(toppingInfo[2]);

                    Topping newTopping = new Topping(toppingName, toppingWeigh);

                    pizza.AddTopping(newTopping);

                    command = Console.ReadLine();
                }

                double pizzaCalories = pizza.GetCalories();
                
                Console.WriteLine($"{pizza.Name} - {pizzaCalories:f2} Calories.");
            }
            catch (Exception ex)
            {
                string exceptionMessage = ex.Message;

                Console.WriteLine(exceptionMessage);
            }
        }
    }
}
