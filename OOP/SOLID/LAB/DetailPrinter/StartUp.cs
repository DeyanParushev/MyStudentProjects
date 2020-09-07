namespace P03.DetailPrinter
{
    using P03.Detail_Printer;
    using System;
    using System.Collections.Generic;

    class StartUp
    {
        static void Main()
        {
            IEmployee employee = new Employee("Ivan");
            IManager manager = new Manager("Dragan", new List<string>());
            Console.WriteLine($"Employee name: {employee.Name}");
            Console.WriteLine($"Manager name: {manager.Name}");
            Console.WriteLine($"Manager documents: {string.Join(", ", manager.Documents)}");
        }
    }
}
