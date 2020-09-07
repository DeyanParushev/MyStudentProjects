namespace Animals
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            Animal animal = new Cat("Ivan", "Wiskas");
            Animal otherAnimal = new Dog("Pesho", "Pedegree");

            Console.WriteLine(animal.ExplainSelf());
            Console.WriteLine(otherAnimal.ExplainSelf());
        }
    }
}
