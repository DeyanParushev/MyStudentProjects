namespace Logger
{
    using Logger.Interfaces;

    public class SimpleLayout : Layout
    {
        public override string ToString()
        {
            return $"{base.dateTime} - {base.errorLevel} - {base.message}\n";
        }
    }
}
