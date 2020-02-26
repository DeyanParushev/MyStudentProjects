namespace Stealer
{
    using System;
    using System.Linq;
    using System.Reflection;

    public class Tracker
    {
        public void PrintMethodByAuthor()
        {
            Type classType = Assembly.GetExecutingAssembly()
                                     .GetTypes()
                                     .FirstOrDefault(x => x.Name == "Program");

            var trackerInstance = Activator.CreateInstance(classType);

            MethodInfo[] methods = trackerInstance.GetType()
                                                  .GetMethods(BindingFlags.Public |
                                                  BindingFlags.Instance |
                                                  BindingFlags.Static);
                                                 
            foreach (MethodInfo method in methods)
            {
                if (method.CustomAttributes.Any(x => x.AttributeType == typeof(AuthorAttribute)))
                {
                    var attributes = method.GetCustomAttributes(false);
                    foreach (AuthorAttribute attribute in attributes)
                    {
                        Console.WriteLine($"{method.Name} writen by {attribute.Name}");
                    }
                }
            }
        }
    }
}
