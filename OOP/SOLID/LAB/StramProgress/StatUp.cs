namespace P01.Stream_Progress
{
    using System;

    public class StartUp
    {
        static void Main()
        {
            IFile file = new File("ivan", 35, 15);
            StreamProgressInfo streamProgressInfo = new StreamProgressInfo(file);
            Console.WriteLine(streamProgressInfo.CalculateCurrentPercent());
        }
    }
}
