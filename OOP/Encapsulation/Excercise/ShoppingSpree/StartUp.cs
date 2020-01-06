namespace ShoppingSpree
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main()
        {
            string[] peopleAndMoney = Console.ReadLine()
                                             .Split(";",StringSplitOptions.RemoveEmptyEntries);

            string[] productsAndPrices = Console.ReadLine()
                                             .Split(";",StringSplitOptions.RemoveEmptyEntries);

            List<Person> people = new List<Person>();
            List<Product> products = new List<Product>();

            try
            {
                foreach (string personAndHisMoney in peopleAndMoney)
                {
                    string name = personAndHisMoney.Split('=')[0];
                    decimal money = decimal.Parse(personAndHisMoney.Split('=')[1]);

                    Person person = new Person(name, money);

                    people.Add(person);
                }

                foreach (string productsAndItsPrice in productsAndPrices)
                {
                    string name = productsAndItsPrice.Split('=')[0];
                    decimal price = decimal.Parse(productsAndItsPrice.Split('=')[1]);

                    Product product = new Product(name, price);

                    products.Add(product);
                }

                string userInput = Console.ReadLine();

                while (userInput != "END")
                {
                    string[] inputLine = userInput.Split();

                    string personName = inputLine[0];
                    string productsNmae = inputLine[1];

                    Person person = people.FirstOrDefault(x => x.Name == personName);
                    Product product = products.FirstOrDefault(x => x.Name == productsNmae);

                    Console.WriteLine(person.BuyProduct(product));

                    userInput = Console.ReadLine();
                }

                foreach (Person person in people)
                {
                    Console.WriteLine(person.ToString());
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
