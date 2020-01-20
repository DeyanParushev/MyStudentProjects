namespace MilitaryElite
{
    using MilitaryElite.Interfaces;

    public class Mission : IMission
    {
        private string codeName;
        private string state = "inProgress";

        public Mission(string codeName)
        {
            this.CodeName = codeName;
        }

        public string CodeName { get => this.codeName; private set => this.codeName = value; }

        public string State { get => this.state; private set => this.state = value; }

        public void CompleteMission()
        {
            this.state = "Finished";
        }
    }
}
