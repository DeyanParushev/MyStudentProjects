namespace AquaShop.Models.Aquariums
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Linq;
    using AquaShop.Models.Aquariums.Contracts;
    using AquaShop.Models.Decorations.Contracts;
    using AquaShop.Models.Fish.Contracts;

    public abstract class Aquarium : IAquarium
    {
        private string name;
        private int capacity;
        ICollection<IDecoration> decorations;
        ICollection<IFish> fish;

        public Aquarium(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.decorations = new List<IDecoration>();
            this.fish = new List<IFish>();
        }
        public string Name
        {
            get => this.name;

            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException($"Aquarium name cannot be null or empty.");
                }

                this.name = value;
            }
        }

        public int Capacity
        {
            get => this.capacity;

            private set => this.capacity = value;
        }

        public int Comfort
        {
            get
            {
                int sum = 0;

                foreach (var decoration in this.decorations)
                {
                    sum += decoration.Comfort;
                }

                return sum;
            }
        }

        public ICollection<IDecoration> Decorations => this.decorations;

        public ICollection<IFish> Fish => this.fish;

        public void AddDecoration(IDecoration decoration)
        {
            this.decorations.Add(decoration);
        }

        public abstract void AddFish(IFish fish);

        public void Feed()
        {
            foreach (IFish fish in this.Fish)
            {
                fish.Eat();
            }
        }

        public string GetInfo()
        {
            StringBuilder sb = new StringBuilder();

            string[] fishNames = new string[this.fish.Count()];
            int couter = 0;

            foreach (var item in this.fish)
            {
                fishNames[couter] = item.Name;
                couter++;
            }

            sb.Append($"{this.Name} ({this.GetType().Name}\r\n)");
            if (this.fish.Count > 0)
            {
                sb.Append($"Fish: " + string.Join(", ", fishNames) + "\r\n");
            }
            else
            {
                sb.AppendLine($"Fish: none\r\n");
            }
            sb.AppendLine($"Decorations: {this.Decorations.Count}\r\n");
            sb.Append($"Comfort: {this.Comfort}");

            return sb.ToString();
        }

        public abstract bool RemoveFish(IFish fish);
    }
}
