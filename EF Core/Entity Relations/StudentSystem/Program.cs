namespace P01_StudentSystem
{
    using P01_StudentSystem.Data;

    public class Program
    {
        public static void Main()
        {
            StudentSystemContext systemContext = new StudentSystemContext();
            systemContext.Database.EnsureDeleted();
            systemContext.Database.EnsureCreated();
        }
    }
}
