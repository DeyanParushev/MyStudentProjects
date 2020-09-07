namespace MXGP.Repositories
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using MXGP.Repositories.Contracts;
    using MXGP.Models.Motorcycles.Contracts;

    public class MotorcycleRepository : IRepository<IMotorcycle>
    {
        private HashSet<IMotorcycle> motors;

        public MotorcycleRepository()
        {
            this.motors = new HashSet<IMotorcycle>();
        }

        public void Add(IMotorcycle model)
        {
            if (this.motors.Any(x => x.Model.ToLower() == model.Model.ToLower()))
            {
                string modelName = this.motors
                                       .FirstOrDefault(x => x.Model.ToLower() == model.Model.ToLower())
                                       .Model;

                throw new ArgumentException($"Motorcycle {modelName} is already created.");
            }

            this.motors.Add(model);
        }

        public IReadOnlyCollection<IMotorcycle> GetAll()
        {
            return this.motors;
        }

        public IMotorcycle GetByName(string name)
        {
            if (!this.motors.Any(x => x.Model.ToLower() == name.ToLower()))
            {
                throw new InvalidOperationException($"Motorcycle {name} could not be found.");
            }

            return this.motors.FirstOrDefault(x => x.Model.ToLower() == name.ToLower());
        }

        public bool Remove(IMotorcycle model)
        {
            if (!motors.Any(x => x.Model.ToLower() == model.Model.ToLower()))
            {
                return false;
            }

            this.motors.Remove(model);
            return true;
        }
    }
}
