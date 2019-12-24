namespace AquaShop.Core
{
    using System;
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;
    using AquaShop.Core.Contracts;
    using AquaShop.Models.Aquariums;
    using AquaShop.Models.Aquariums.Contracts;
    using AquaShop.Models.Decorations;
    using AquaShop.Models.Decorations.Contracts;
    using AquaShop.Models.Fish;
    using AquaShop.Models.Fish.Contracts;
    using AquaShop.Repositories;
    using AquaShop.Repositories.Contracts;

    public class Controller : IController
    {
        IRepository<IDecoration> decorRepository;
        List<IAquarium> aquariumCollection;

        public Controller()
        {
            this.decorRepository = new DecorationRepository();
            this.aquariumCollection = new List<IAquarium>();
        }

        public string AddAquarium(string aquariumType, string aquariumName)
        {
            IAquarium aquarium = null;

            if (aquariumType == "FreshwaterAquarium")
            {
                aquarium = new FreshwaterAquarium(aquariumName);
            }
            else if (aquariumType == "SaltwaterAquarium")
            {
                aquarium = new SaltwaterAquarium(aquariumName);
            }
            else
            {
                throw new InvalidOperationException($"Invalid aquarium type.");
            }

            this.aquariumCollection.Add(aquarium);

            return $"Successfully added {aquariumType}.";
        }

        public string AddDecoration(string decorationType)
        {
            IDecoration decoration = null;

            if (decorationType == "Plant")
            {
                decoration = new Plant();
            }
            else if (decorationType == "Ornament")
            {
                decoration = new Ornament();
            }
            else
            {
                throw new InvalidOperationException($"Invalid decoration type.");
            }

            this.decorRepository.Add(decoration);
            return $"Successfully added {decorationType}.";
        }

        public string AddFish(string aquariumName, string fishType, string fishName, string fishSpecies, decimal price)
        {
            IFish fish = null;

            if (fishType == "FreshwaterFish")
            {
                fish = new FreshwaterFish(fishName, fishSpecies, price);
            }
            else if (fishType == "SaltwaterFish")
            {
                fish = new SaltwaterFish(fishName, fishSpecies, price);
            }
            else
            {
                throw new InvalidOperationException($"Invalid fish type.");
            }

            IAquarium aquarium = this.aquariumCollection.FirstOrDefault(x => x.Name.ToLower() == aquariumName.ToLower());

            if (aquarium.GetType().Name.Contains("Freshwater") && fishType.Contains("Freshwater"))
            {
                aquarium.Fish.Add(fish);
                return $"Successfully added {fishType} to {aquariumName}.";
            }

            if (aquarium.GetType().Name.Contains("Saltwater") && fishType.Contains("Saltwater"))
            {
                aquarium.Fish.Add(fish);
                return $"Successfully added {fishType} to {aquariumName}.";
            }

            return $"Water not suitable.";
        }

        public string CalculateValue(string aquariumName)
        {
            IAquarium aquarium = this.aquariumCollection.FirstOrDefault(x => x.Name.ToLower() == aquariumName.ToLower());

            decimal price = 0;

            foreach (IDecoration decoration in aquarium.Decorations)
            {
                price += decoration.Price;
            }

            foreach (IFish fish in aquarium.Fish)
            {
                price += fish.Price;
            }

            return $"The value of Aquarium {aquariumName} is {price:F2}.";
        }

        public string FeedFish(string aquariumName)
        {
            IAquarium aquarium = this.aquariumCollection.FirstOrDefault(x => x.Name.ToLower() == aquariumName.ToLower());

            foreach (IFish fish in aquarium.Fish)
            {
                fish.Eat();
            }

            return $"Fish fed: {aquarium.Fish.Count}";
        }

        public string InsertDecoration(string aquariumName, string decorationType)
        {
            IAquarium aquarium = this.aquariumCollection.FirstOrDefault(x => x.Name.ToLower() == aquariumName.ToLower());
            IDecoration decoration = null;

            if (decorationType == "Plant")
            {
                decoration = new Plant();
            }
            else if (decorationType == "Ornament")
            {
                decoration = new Ornament();
            }
            else
            {
                throw new InvalidOperationException($"There isn't a decoration of type {decorationType}.");
            }

            aquarium.AddDecoration(decoration);
            bool removalSuccessfull = this.decorRepository.Remove(decoration);

            if (removalSuccessfull)
            {
                return $"Successfully added {decorationType} to {aquariumName}.";
            }
            else
            {
                return $"There isn't a decoration of type {decorationType}.";
            }
        }

        public string Report()
        {
            StringBuilder sb = new StringBuilder();

            foreach (var aquarium in this.aquariumCollection)
            {
                sb.Append(aquarium.GetInfo());
            }

            return sb.ToString();
        }
    }
}
