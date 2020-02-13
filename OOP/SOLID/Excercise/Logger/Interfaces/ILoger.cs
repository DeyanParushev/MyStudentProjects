namespace Logger
{
    public interface ILoger
    {
        public void AddAppender(IAppender appender);

        public void Critical(string dateTime, string message);

        public void Error(string dateTime, string message);

        public void Fatal(string dateTime, string message);

        public void Info(string dateTime, string message);

        public void Warning(string dateTime, string message);
    }
}
