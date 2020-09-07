namespace Logger
{
    using System.Text;
    using Logger.Interfaces;

    public abstract class Appender :  IAppender
    {
        private ILayout layout;
        private string reportLevelString;
        protected int reportLevelInt;
        protected int appendedMessages = 0;

        public Appender(ILayout layout)
        {
            this.layout = layout;
        }

        protected string GetLayout()
        {
            return this.layout.ToString();
        }

        public abstract void Append(string dateTime, string message, string errorLevel);

        public virtual void SetLayoutInformation(string dateTime, string message, string errorLevel)
        {
            this.layout.SetDateTime(dateTime);
            this.layout.SetMessage(message);
            this.layout.SetErrorLevel(errorLevel);
        }

        public void SetAlertTreshhold(string reportLevel)
        {
            this.reportLevelString = reportLevel;
            this.reportLevelInt = GetLogAlertLevel(reportLevel);
        }

        protected int GetLogAlertLevel(string alertLevelString)
        {
            int alertLevelInt = 1;

            if (alertLevelString == "WARNING")
            {
                alertLevelInt = 2;
            }
            else if (alertLevelString == "ERROR")
            {
                alertLevelInt = 3;
            }
            else if (alertLevelString == "CRITICAL")
            {
                alertLevelInt = 4;
            }
            else if (alertLevelString == "FATAL")
            {
                alertLevelInt = 5;
            }

            return alertLevelInt;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append($"Appender type: {this.GetType().Name}, " +
                $"Layout type: {this.layout.GetType().Name}, " +
                $"Report level: {this.reportLevelString}, " +
                $"Messages appended: {this.appendedMessages}");

            return sb.ToString();
        }
    }
}
