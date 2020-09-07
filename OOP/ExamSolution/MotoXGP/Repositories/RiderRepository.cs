namespace MXGP.Repositories
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using MXGP.Models.Riders.Contracts;
    using MXGP.Repositories.Contracts;

    public class RiderRepository : IRepository<IRider>
    {
        private HashSet<IRider> riders;

        public RiderRepository()
        {
            this.riders = new HashSet<IRider>();
        }

        public void Add(IRider rider)
        {
            if (this.riders.Any(x => x.Name.ToLower() == rider.Name.ToLower()))
            {
                string riderName = this.riders
                                       .FirstOrDefault(x => x.Name.ToLower() == rider.Name.ToLower())
                                       .Name;

                throw new ArgumentException($"Rider {riderName} is already created.");
            }

            this.riders.Add(rider);
        }

        public IReadOnlyCollection<IRider> GetAll()
        {
            return this.riders;
        }

        public IRider GetByName(string name)
        {
            if (!this.riders.Any(x => x.Name.ToLower() == name.ToLower()))
            {
                throw new InvalidOperationException($"Rider {name} could not be found.");
            }

            return this.riders.FirstOrDefault(x => x.Name.ToLower() == name.ToLower());
        }

        public bool Remove(IRider rider)
        {
            if (!riders.Any(x => x.Name.ToLower() == rider.Name.ToLower()))
            {
                return false;
            }

            this.riders.Remove(rider);

            return true;
        }
    }
}
