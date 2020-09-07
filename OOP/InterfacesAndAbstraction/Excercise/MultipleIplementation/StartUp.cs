namespace PersonInfo
{
    using System;

    public class StartUp
    {
        public static void Main()
        {
            Citizen person = new Citizen("Ivan", 22, "5978631426", "22/05/59");

            Console.WriteLine(person.Name);
            Console.WriteLine(person.Age);
            Console.WriteLine(person.Id);
            Console.WriteLine(person.Birthdate);
        }
    }
}
