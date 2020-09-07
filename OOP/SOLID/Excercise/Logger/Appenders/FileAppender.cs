namespace Logger
{
    using System.IO;
    using Logger.Interfaces;

    public class FileAppender : Appender
    {
        private ILogFile log;

        public FileAppender(ILayout layout)
            : base(layout)
        {
            this.log = new LogFile();
        }

        public override void Append(string dateTime, string message, string errorLevel)
        {
            int alertLevel = base.GetLogAlertLevel(errorLevel);

            if (alertLevel >= base.reportLevelInt)
            {
                base.appendedMessages++;
                base.SetLayoutInformation(dateTime, message, errorLevel);
                log.Write(base.GetLayout());
                TextWriter writer = new StreamWriter(@"C:\Users\dparu\OneDrive\Desktop\log.txt", true);

                using (writer)
                {
                    writer.WriteLine(base.GetLayout());
                }
            }
        }

        public override string ToString()
        {
            return base.ToString() + $", File size: {this.log.GetSize()}";
        }
    }
}
