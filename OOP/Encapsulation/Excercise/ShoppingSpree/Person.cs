namespace ShoppingSpree
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class Person
    {
        private string name;
        private decimal money;
        private List<Product> bag;

        public Person(string name, decimal money)
        {
            this.Name = name;
            this.Money = money;
            this.bag = new List<Product>();
        }

        public string Name
        {
            get => this.name;

            private set
            {
                if (string.IsNullOrEmpty(value) || string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be empty");
                }

                this.name = value;
            }
        }

        public decimal Money     
        { 
            get => this.money;

            private set 
            {
                if(value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }

                this.money = value;
            }
        }

        public string BuyProduct(Product product)
        {
            string output;

            if(this.Money < product.Cost)
            {
                output = $"{this.Name} can't afford {product.Name}";
            }
            else
            {
                output = $"{this.Name} bought {product.Name}";
                
                this.bag.Add(product);
                this.Money -= product.Cost;
            }

            return output;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append($"{this.Name} - ");

            if(this.bag.Count > 0)
            {
                sb.Append($"{string.Join(", ", this.bag.Select(x=> x.Name).ToArray())}");
            }
            else
            {
                sb.Append($"Nothing bought");
            }

            return sb.ToString();
        }
    }
}
