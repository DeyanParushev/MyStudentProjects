namespace Logger
{
    public interface ILogFile
    {
        int GetSize();

        void Write(string input);
    }
}
