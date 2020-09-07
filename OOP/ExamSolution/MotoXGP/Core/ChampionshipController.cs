namespace MXGP.Core
{
    using System.Linq;
    using System.Text;
    using MXGP.Core.Contracts;
    using MXGP.Models.Motorcycles;
    using MXGP.Models.Motorcycles.Contracts;
    using MXGP.Models.Races;
    using MXGP.Models.Races.Contracts;
    using MXGP.Models.Riders.Contracts;
    using MXGP.Repositories;
    using MXGP.Repositories.Contracts;

    public class ChampionshipController : IChampionshipController
    {
        private IRepository<IMotorcycle> motorCycleRepository;
        private IRepository<IRider> ridersRepository;
        private IRepository<IRace> raceRepository;

        public ChampionshipController()
        {
            this.motorCycleRepository = new MotorcycleRepository();
            this.ridersRepository = new RiderRepository();
            this.raceRepository = new RaceRepository();
        }

        public string AddMotorcycleToRider(string riderName, string motorcycleModel)
        {
            IRider rider = this.ridersRepository.GetByName(riderName);

            if (rider.Motorcycle != null)
            {
                IMotorcycle motorcycle = this.motorCycleRepository.GetByName(motorcycleModel);
                rider.AddMotorcycle(motorcycle);

                return $"Rider {riderName} replaced motorcycle {motorcycleModel}.";
            }
            else
            {
                IMotorcycle motorcycle = this.motorCycleRepository.GetByName(motorcycleModel);
                rider.AddMotorcycle(motorcycle);

                return $"Rider {riderName} received motorcycle {motorcycleModel}.";
            }
        }

        public string AddRiderToRace(string raceName, string riderName)
        {
            IRider rider = this.ridersRepository.GetByName(riderName);
            IRace race = this.raceRepository.GetByName(raceName);

            race.AddRider(rider);

            return $"Rider {riderName} added in {raceName} race.";
        }

        public string CreateMotorcycle(string type, string model, int horsePower)
        {
            IMotorcycle motor = null;

            if (type == "Speed")
            {
                motor = new SpeedMotorcycle(model, horsePower);
            }
            else if (type == "Power")
            {
                motor = new PowerMotorcycle(model, horsePower);
            }

            this.motorCycleRepository.Add(motor);

            return $"{type}Motorcycle {model} is created.";
        }

        public string CreateRace(string name, int laps)
        {
            IRace race = new Race(name, laps);
            this.raceRepository.Add(race);

            return $"Race {name} is created.";
        }

        public string CreateRider(string riderName)
        {
            IRider rider = new Rider(riderName);
            this.ridersRepository.Add(rider);

            return $"Rider {riderName} is created.";
        }

        public string StartRace(string raceName)
        {
            IRace race = this.raceRepository.GetByName(raceName);

            if (race.Riders.Count < 3)
            {
                return $"Race {raceName} cannot start with less than 3 participants.";
            }

            IRider[] riders = race.Riders
                                  .OrderByDescending(x => x.Motorcycle.CalculateRacePoints(race.Laps))
                                  .Take(3)
                                  .ToArray();

            riders[0].WinRace();

            this.raceRepository.Remove(race);

            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"Rider {riders[0].Name} wins {raceName} race.");
            sb.AppendLine($"Rider {riders[1].Name} is second in {raceName} race.");
            sb.Append($"Rider {riders[2].Name} is third in {raceName} race.");

            return sb.ToString();
        }
    }
}
