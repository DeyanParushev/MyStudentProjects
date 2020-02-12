namespace Logger
{
    using Logger.Interfaces;

    public class Layout : ILayout
    {
        protected string message;
        protected string dateTime;
        protected string errorLevel;

        public void SetMessage(string message)
        {
            this.message = message;
        }

        public void SetDateTime(string message)
        {
            this.dateTime = message;
        }

        public void SetErrorLevel(string message)
        {
            this.errorLevel = message;
        }
    }
}
