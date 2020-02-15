namespace Logger
{
    public class LogFile : ILogFile
    {
        private string content;

        public void Write(string input)
        {
            this.content += input;
        }

        public int GetSize()
        {
            int charSum = 0;

            for (int i = 0; i < this.content.Length; i++)
            {
                if (char.IsLetter(content[i]))
                {
                    charSum += content[i];
                }
            }

            return charSum;
        }
    }
}
