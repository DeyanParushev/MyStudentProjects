namespace PokemonTrainer
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main()
        {
            string userCommand = Console.ReadLine();

            List<Trainer> trainers = new List<Trainer>();

            while (userCommand != "Tournament")
            {
                string[] pokemonAndTrainerInfo = userCommand
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                string trainerName = pokemonAndTrainerInfo[0];
                string pokemonName = pokemonAndTrainerInfo[1];
                string pokemonElement = pokemonAndTrainerInfo[2];
                int pokemonHealth = int.Parse(pokemonAndTrainerInfo[3]);

                Pokemon pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);

                if (trainers.Exists(x => x.Name == trainerName))
                {
                    Trainer trainer = trainers
                        .Find(x => x.Name == trainerName);

                    trainer.PokemonCollection.Add(pokemon);
                }
                else
                {
                    Trainer newTrainer = new Trainer(trainerName, pokemon);
                    trainers.Add(newTrainer);
                }

                userCommand = Console.ReadLine();
            }

            string tournamentCondition = Console.ReadLine();

            while (tournamentCondition != "End")
            {
                string tournamentELement = tournamentCondition;

                foreach (Trainer pokemonTrainer in trainers)
                {
                    if (!pokemonTrainer.PokemonCollection.Exists(x => x.Element == tournamentELement))
                    {
                        pokemonTrainer.PokemonCollection.ForEach(x => x.Health -= 10);
                        pokemonTrainer.PokemonCollection.RemoveAll(x => x.Health < 1);
                    }
                    else
                    {
                        pokemonTrainer.NumberOfBadges += 1;
                    }
                }

                tournamentCondition = Console.ReadLine();
            }

            trainers = trainers
                .OrderByDescending(x => x.NumberOfBadges)
                .ToList();

            foreach (Trainer trainer1 in trainers)
            {
                Console.WriteLine($"{trainer1.Name} {trainer1.NumberOfBadges} {trainer1.PokemonCollection.Count}");
            }
        }
    }
}
