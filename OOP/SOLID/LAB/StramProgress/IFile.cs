namespace P01.Stream_Progress
{
    public interface IFile
    {
        int Length { get; }

        int BytesSent { get; }
    }
}
