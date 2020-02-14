namespace Logger
{
    using System.Text;

    public class XmlLayout : Layout
    {
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine("<log>");
            sb.AppendLine($"<date>{base.dateTime}</date>");
            sb.AppendLine($"<level>{base.errorLevel}</level>");
            sb.AppendLine($"<message>{base.message}</message>");
            sb.Append("</log>");

            return sb.ToString();
        }
    }
}
