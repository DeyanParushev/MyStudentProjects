namespace Logger
{
    public class StartUp
    {
        public static void Main()
        {
            CommandInterpreter commandInterpreter = new CommandInterpreter();

            commandInterpreter.GetAppendersInformation();
            commandInterpreter.CreateLog();
            commandInterpreter.LogInformation();
        }
    }
}
