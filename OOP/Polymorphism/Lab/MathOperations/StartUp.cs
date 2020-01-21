namespace Operations
{
    public class StartUp
    {
        static void Main()
        {
            MathOperations mathOperations = new MathOperations();

            int intResult = mathOperations.Add(5, 10);
            double doubleResult = mathOperations.Add(5.5, 1.2, 6.8);
            decimal decimalResult = mathOperations.Add(7.956263m, 16.749615m, 9.46516854163168m);

            System.Console.WriteLine($"{intResult}\r\n{doubleResult}\r\n{decimalResult}");
        }
    }
}
