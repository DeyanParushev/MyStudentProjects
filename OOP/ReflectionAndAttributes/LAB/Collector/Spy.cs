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

        public string AnalyzeAcessModifiers(string className)
        {
            StringBuilder sb = new StringBuilder();

            Type classType = Assembly.GetExecutingAssembly()
                                    .GetTypes()
                                    .FirstOrDefault(x => x.Name == className);

            FieldInfo[] fields = classType.GetFields(BindingFlags.Public |
                                                              BindingFlags.Instance |
                                                              BindingFlags.Static);

            MethodInfo[] publicMethodModifiers = classType.GetMethods(BindingFlags.Public |
                                                                      BindingFlags.Instance);

            MethodInfo[] privateMethodModifiers = classType.GetMethods(BindingFlags.NonPublic |
                                                                       BindingFlags.Instance);

            foreach (FieldInfo field in fields)
            {
                sb.AppendLine($"{field.Name} must be private!");
            }
            foreach (MethodInfo method in privateMethodModifiers.Where(x => x.Name.StartsWith("get")))
            {
                sb.AppendLine($"{method.Name} have to be public");
            }
            foreach (MethodInfo method in publicMethodModifiers.Where(x => x.Name.StartsWith("set")))
            {
                sb.AppendLine($"{method.Name} have to be private!");
            }

            return sb.ToString();
        }

        public string RevealPrivateMethods(string className)
        {
            Type classType = Assembly.GetExecutingAssembly()
                                     .GetTypes()
                                     .FirstOrDefault(x => x.Name == className);

            MethodInfo[] privateMethods = classType.GetMethods(BindingFlags.NonPublic |
                                                               BindingFlags.Instance);

            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"All Private Methods of Class: {className}");
            sb.AppendLine($"Base Class: {classType.BaseType.Name}");

            foreach (MethodInfo method in privateMethods)
            {
                sb.AppendLine($"{method.Name}");
            }

            return sb.ToString();
        }

        public string CollectGettersAndSetters(string className)
        {
            Type classType = Assembly.GetExecutingAssembly()
                                     .GetTypes()
                                     .FirstOrDefault(x => x.Name == className);

            MethodInfo[] getters = classType.GetMethods(BindingFlags.NonPublic |
                                                               BindingFlags.Static |
                                                               BindingFlags.Instance |
                                                               BindingFlags.Public)
                                                    .Where(x => x.Name.StartsWith("get"))
                                                    .ToArray();

            MethodInfo[] setters = classType.GetMethods(BindingFlags.NonPublic |
                                                               BindingFlags.Static |
                                                               BindingFlags.Instance |
                                                               BindingFlags.Public)
                                                    .Where(x => x.Name.StartsWith("set"))
                                                    .ToArray();

            StringBuilder sb = new StringBuilder();

            foreach (MethodInfo getter in getters)
            {
                sb.AppendLine($"{getter.Name} will return {getter.ReturnType}");
            }

            foreach (MethodInfo setter in setters)
            {
                sb.AppendLine($"{setter.Name} will set field of {setter.GetParameters().First().ParameterType}");
            }

            return sb.ToString();
        }
    }
}
