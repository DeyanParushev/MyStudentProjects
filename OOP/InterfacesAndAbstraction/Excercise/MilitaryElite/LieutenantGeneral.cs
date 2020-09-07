namespace MilitaryElite
{
    using System.Collections;
    using System.Collections.Generic;

    public class LieutenantGeneral : IPrivate, ILieutenantGeneral
    {
        private string id;
        private string fistName;
        private string lastName;
        private decimal salary;
        private ICollection<string> privates;

        public LieutenantGeneral(string id, string firstName, string lastName, decimal salary, params string[] privateId)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Salary = salary;
            this.privates = privateId;
        }

        public string Id { get => this.id; private set => this.id = value; }

        public string FirstName { get => this.fistName; private set => this.fistName = value; }

        public string LastName { get => this.lastName; private set => this.lastName = value; }

        public decimal Salary { get => this.salary; private set => this.salary = value; }

        public ICollection<string> Privates { get => this.privates; }
    }
}
