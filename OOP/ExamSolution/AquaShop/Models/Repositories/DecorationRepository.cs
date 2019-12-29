namespace AquaShop.Repositories
{
    using System.Collections.Generic;
    using System.Linq;
    using AquaShop.Models.Decorations.Contracts;
    using AquaShop.Repositories.Contracts;

    class DecorationRepository : IRepository<IDecoration>
    {
        private List<IDecoration> decorations;

        public DecorationRepository()
        {
            this.decorations = new List<IDecoration>();
        }
        public IReadOnlyCollection<IDecoration> Models => this.decorations;

        public void Add(IDecoration model)
        {
            this.decorations.Add(model);
        }

        public IDecoration FindByType(string type)
        {
            if (this.decorations.Exists(x => x.GetType().Name == type))
            {
                IDecoration decoration = decorations.FirstOrDefault(x => x.GetType().Name == type);
                return decoration;
            }

            return null;
        }

        public bool Remove(IDecoration model)
        {
            IDecoration decoration = this.Models.FirstOrDefault(x => x.Price == model.Price && x.Comfort == model.Comfort);
            if (decoration != null)
            {
                this.decorations.Remove(decoration);
                return true;
            }

            return false;
        }
    }
}
