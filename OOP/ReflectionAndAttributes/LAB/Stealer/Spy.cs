namespace Stealer
{
    using System;
    using System.Linq;
    using System.Reflection;
    using System.Text;

    public class Spy
    {
        public string StealFieldInfo(string investigatedClass, params string[] searchedFields)
        {
            StringBuilder sb = new StringBuilder();

            Type classType = Assembly.GetExecutingAssembly()
                                        .GetTypes()
                                        .FirstOrDefault(x => x.Name == investigatedClass);

            FieldInfo[] fields = classType.GetFields(BindingFlags.Public |
                                                     BindingFlags.Instance |
                                                     BindingFlags.Static |
                                                     BindingFlags.NonPublic);
            Object classInstance = Activator.CreateInstance(classType);


            sb.AppendLine($"Class under investigation: {investigatedClass}");

            foreach (FieldInfo field in fields.Where(x => searchedFields.Contains(x.Name)))
            {
                sb.AppendLine($"{field.Name} = {field.GetValue(classInstance)}");
            }


            return sb.ToString().Trim();
        }
    }
}
