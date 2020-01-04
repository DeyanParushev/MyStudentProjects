namespace PersonsInfo
{
    using System.Collections.Generic;
    using System.Text;

    public class Team
    {
        private string name;
        private List<Person> firstTeam;
        private List<Person> reserveTeam;

        public Team(string name)
        {
            this.Name = name;
            this.firstTeam = new List<Person>();
            this.reserveTeam = new List<Person>();
        }

        public string Name 
        {
            get => this.name;

            private set 
            {
                this.name = value;
            }
        }

        public void AddPlayer(Person player)
        {
            if(player.Age < 40)
            {
                this.firstTeam.Add(player);
            }
            else
            {
                this.reserveTeam.Add(player);
            }
        }

        public IReadOnlyList<Person> FirstTeam => this.firstTeam;

        public IReadOnlyList<Person> ReserveTeam => this.reserveTeam;

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"First team has {this.firstTeam.Count} players.");
            sb.Append($"Reserve team has {this.reserveTeam.Count} players.");

            return sb.ToString();
        }
    }
}
