namespace Logger
{
    using System.Text;
    using System.Collections.Generic;

    public class Loger : ILoger
    {
        private ICollection<IAppender> appenders;

        public Loger(ICollection<IAppender> appenders)
        {
            this.appenders = appenders;
        }

        public void Info(string dateTime, string message)
        {
            AppendInfo(dateTime, message, "INFO");
        }

        public void Warning(string dateTime, string message)
        {
            AppendInfo(dateTime, message, "WARNING");
        }

        public void Error(string dateTime, string message)
        {
            AppendInfo(dateTime, message, "ERROR");
        }

        public void Critical(string dateTime, string message)
        {
            AppendInfo(dateTime, message, "CRITICAL");
        }

        public void Fatal(string dateTime, string message)
        {
            AppendInfo(dateTime, message, "FATAL");
        }

        private void AppendInfo(string dateTime, string message, string errorLevel)
        {
            foreach (IAppender appender in this.appenders)
            {
                appender.Append(dateTime, message, errorLevel);
            }
        }

        public void AddAppender(IAppender appender)
        {
            this.appenders.Add(appender);
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine("Logger info");

            foreach (IAppender appender in this.appenders)
            {
                sb.AppendLine(appender.ToString());
            }

            return sb.ToString();
        }
    }
}
