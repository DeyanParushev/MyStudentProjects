namespace Logger
{
    using System;
    using System.Collections.Generic;
    using Logger.Interfaces;

    public class CommandInterpreter : ICommandInterpreter
    {
        private IList<string> appenderTypes;
        private IList<string> layoutTypes;
        private IList<string> appendersErrorLevels;
        private ILoger loger;

        public CommandInterpreter()
        {
            this.appenderTypes = new List<string>();
            this.layoutTypes = new List<string>();
            this.appendersErrorLevels = new List<string>();
        }

        public void GetAppendersInformation()
        {
            int appendersNumber = int.Parse(Console.ReadLine());

            for (int i = 0; i < appendersNumber; i++)
            {
                string[] appenderInfo = Console.ReadLine().Split();

                appenderTypes.Add(appenderInfo[0]);
                layoutTypes.Add(appenderInfo[1]);

                if (appenderInfo.Length > 2)
                {
                    appendersErrorLevels.Add(appenderInfo[2]);
                }
                else
                {
                    appendersErrorLevels.Add("INFO");
                }
            }
        }

        public void LogInformation()
        {
            string command = Console.ReadLine();

            while (command != "END")
            {
                string[] inputLine = command.Split('|');

                string errorLevel = inputLine[0];
                string dateTime = inputLine[1];
                string message = inputLine[2];

                if (errorLevel == "WARNING")
                {
                    loger.Warning(dateTime, message);
                }
                else if (errorLevel == "ERROR")
                {
                    loger.Error(dateTime, message);
                }
                else if (errorLevel == "CRITICAL")
                {
                    loger.Critical(dateTime, message);
                }
                else if (errorLevel == "FATAL")
                {
                    loger.Fatal(dateTime, message);
                }
                else
                {
                    loger.Info(dateTime, message);
                }

                command = Console.ReadLine();
            }

            Console.WriteLine(loger.ToString());
        }

        public void CreateLog()
        {
            List<IAppender> appenders = new List<IAppender>();

            for (int i = 0; i < this.appenderTypes.Count; i++)
            {
                ILayout layout = CreateLayout(this.layoutTypes[i]);
                IAppender appender = new ConsoleAppender(layout);

                if (this.appenderTypes[i] == "FileAppender")
                {
                    appender = new FileAppender(layout);
                }

                appender.SetAlertTreshhold(appendersErrorLevels[i]);

                appenders.Add(appender);
            }

            this.loger = new Loger(appenders);
        }

        private ILayout CreateLayout(string layoutType)
        {
            ILayout layout = new SimpleLayout();

            if (layoutType == "XmlLayout")
            {
                layout = new XmlLayout();
            }

            return layout;
        }
    }
}
