namespace Froggy
{
    using System;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int[] inputLine = Console.ReadLine()
                .Split(", ",StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Lake<int> lake = new Lake<int>(inputLine);

            int[] stonesSequence = new int[lake.LakeStones.Length];

            int counter = 0;

            foreach (int item in lake)
            {
                stonesSequence[counter] = item;
                counter++;
            }

            Console.WriteLine(string.Join(", ", stonesSequence));
        }
    }
}
