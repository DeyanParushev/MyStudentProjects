namespace PokemonTrainer
{
    using System;
    using System.Collections.Generic;

    public class Trainer
    {
        private string name;
        private int numberOfBadges = 0;
        private List<Pokemon> pokemonCollection = new List<Pokemon>();

        public Trainer(string name, Pokemon pokemon)
        {
            this.Name = name;
            this.PokemonCollection.Add(pokemon);
        }

        public List<Pokemon> PokemonCollection
        {
            get { return this.pokemonCollection; }
            set { this.pokemonCollection = value; }
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }

        public int NumberOfBadges
        {
            get { return this.numberOfBadges; }
            set { this.numberOfBadges = value; }
        }
    }
}
