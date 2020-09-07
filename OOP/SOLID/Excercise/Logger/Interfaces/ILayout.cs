namespace Logger.Interfaces
{
    public interface ILayout
    {
        public void SetDateTime(string dateTime) { }

        public void SetMessage(string message) { }

        public void SetErrorLevel(string message) { }
    }
}
