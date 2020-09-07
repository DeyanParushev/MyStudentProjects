namespace P03.DetailPrinter
{
    using P03.Detail_Printer;
    using System.Collections.Generic;

    public class Manager : IManager
    {
        public Manager(string name, ICollection<string> documents)
        {
            this.Name = name;
            this.Documents = new List<string>(documents);
        }
        public string Name { get; set; }

        public IReadOnlyCollection<string> Documents { get; set; }

    }
}
