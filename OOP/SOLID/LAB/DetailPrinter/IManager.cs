namespace P03.Detail_Printer
{
    using System.Collections.Generic;

    public interface IManager
    {
        string Name { get; }

        IReadOnlyCollection<string> Documents { get; }
    }
}
