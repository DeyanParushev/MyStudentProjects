namespace P03.DetailPrinter
{
    using P03.Detail_Printer;
    using System;
    using System.Collections.Generic;

    public class DetailsPrinter
    {
        private IList<IEmployee> employees;

        public DetailsPrinter(IList<IEmployee> employees)
        {
            this.employees = employees;
        }

        public void PrintDetails()
        {
            foreach (IEmployee employee in this.employees)
            {
                if (employee is IManager)
                {
                    this.PrintManager((IManager)employee);
                }
                else
                {
                    this.PrintEmployee(employee);
                }
            }
        }

        private void PrintEmployee(IEmployee employee)
        {
            Console.WriteLine(employee.Name);
        }

        private void PrintManager(IManager manager)
        {
            Console.WriteLine(manager.Name);
            Console.WriteLine(string.Join(Environment.NewLine, manager.Documents));
        }
    }
}
