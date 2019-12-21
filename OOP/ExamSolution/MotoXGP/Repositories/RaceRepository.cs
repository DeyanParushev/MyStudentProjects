namespace MXGP.Repositories
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using MXGP.Models.Races.Contracts;
    using MXGP.Repositories.Contracts;

    public class RaceRepository : IRepository<IRace>
    {
        private HashSet<IRace> races;

        public RaceRepository()
        {
            this.races = new HashSet<IRace>();
        }

        public void Add(IRace race)
        {
            if (this.races.Any(x => x.Name.ToLower() == race.Name.ToLower()))
            {
                string raceName = this.races
                                      .FirstOrDefault(x => x.Name.ToLower() == race.Name.ToLower())
                                      .Name;

                throw new InvalidOperationException($"Race {raceName} is already created.");
            }

            this.races.Add(race);
        }

        public bool Remove(IRace race)
        {
            if (!races.Any(x => x.Name.ToLower() == race.Name.ToLower()))
            {
                return false;
            }

            this.races.Remove(race);

            return true;
        }

        public IReadOnlyCollection<IRace> GetAll()
        {
            return this.races;
        }

        public IRace GetByName(string name)
        {
            if (!this.races.Any(x => x.Name.ToLower() == name.ToLower()))
            {
                throw new InvalidOperationException($"Race {name} could not be found.");
            }

            return this.races.FirstOrDefault(x => x.Name.ToLower() == name.ToLower());
        }
    }
}
