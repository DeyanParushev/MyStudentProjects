namespace SoftUni
{
    using System;
    using SoftUni.Data;
    using System.Text;
    using System.Linq;
    using System.Collections.Generic;

    using SoftUni.Models;
    using System.Security.Cryptography.X509Certificates;
    using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
    using System.Runtime.InteropServices.ComTypes;

    public class StartUp
    {
        public static void Main()
        {
            using SoftUniContext context = new SoftUniContext();

            //Console.WriteLine(GetEmployeesFullInformation(context)); //Problem 3
            //Console.WriteLine(GetEmployeesWithSalaryOver50000(context)); //Problem 4
            //Console.WriteLine(GetEmployeesFromResearchAndDevelopment(context)); //Problem 5
            //Console.WriteLine(AddNewAddressToEmployee(context)); //Problem 6
            //Console.WriteLine(GetEmployeesInPeriod(context)); //Problem 7
            //Console.WriteLine(GetAddressesByTown(context)); //Problem 8
            //Console.WriteLine(GetEmployee147(context)); //Problem 9
            //Console.WriteLine(GetDepartmentsWithMoreThan5Employees(context)); //Problem 10
            //Console.WriteLine(GetLatestProjects(context)); //Problem 11
            //Console.WriteLine(IncreaseSalaries(context)); //Problem 12
            //Console.WriteLine(DeleteProjectById(context)); //Problem 14

            Console.WriteLine(RemoveTown(context)); //Problem 15
        }

        public static string GetEmployeesFullInformation(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employeesInfo = context.Employees
                                       .Select(em => new
                                       {
                                           em.EmployeeId,
                                           em.FirstName,
                                           em.LastName,
                                           em.MiddleName,
                                           em.JobTitle,
                                           em.Salary
                                       })
                                       .OrderBy(em => em.EmployeeId)
                                       .ToList();

            foreach (var extractedEmplyoee in employeesInfo)
            {
                sb.AppendLine($"{extractedEmplyoee.FirstName} " +
                              $"{extractedEmplyoee.LastName} " +
                              $"{extractedEmplyoee.MiddleName} " +
                              $"{extractedEmplyoee.JobTitle} " +
                              $"{extractedEmplyoee.Salary:F2}");
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetEmployeesWithSalaryOver50000(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var extractedEmployeesInfo = context.Employees
                                                .Select(em => new
                                                {
                                                    em.FirstName,
                                                    em.Salary
                                                })
                                                .Where(em => em.Salary > 50000)
                                                .OrderBy(em => em.FirstName)
                                                .ToList();

            foreach (var employee in extractedEmployeesInfo)
            {
                sb.AppendLine($"{employee.FirstName} - {employee.Salary:F2}");
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetEmployeesFromResearchAndDevelopment(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var extractedEmployeesInfo = context.Employees
                                                .Select(em => new
                                                {
                                                    em.FirstName,
                                                    em.LastName,
                                                    em.Department.Name,
                                                    em.Salary
                                                })
                                                .Where(em => em.Name == "Research and Development")
                                                .OrderBy(em => em.Salary)
                                                .ThenByDescending(em => em.FirstName)
                                                .ToList();

            foreach (var extractedEmployee in extractedEmployeesInfo)
            {
                sb.AppendLine($"{extractedEmployee.FirstName} {extractedEmployee.LastName} " +
                              $"from {extractedEmployee.Name} - ${extractedEmployee.Salary:F2}");
            }

            return sb.ToString().TrimEnd();
        }

        public static string AddNewAddressToEmployee(SoftUniContext context)
        {
            Address addressToAdd = new Address();
            addressToAdd.AddressText = "Vitoshka 15";
            addressToAdd.TownId = 4;

            Employee employee = context.Employees.First(em => em.LastName == "Nakov");

            employee.Address = addressToAdd;
            context.SaveChanges();

            StringBuilder sb = new StringBuilder();

            List<string> employeesAddresses = context.Employees
                                       .OrderByDescending(em => em.AddressId)
                                       .Take(10)
                                       .Select(em => em.Address.AddressText)
                                       .ToList();

            foreach (string employeeAddress in employeesAddresses)
            {
                sb.AppendLine($"{employeeAddress}");
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetEmployeesInPeriod(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var extractedEmbployees = context.Employees
                                             .Where(em => em.EmployeesProjects
                                                            .Any(ep => ep.Project.StartDate.Year >= 2001 &&
                                                                       ep.Project.StartDate.Year <= 2003))
                                             .Take(10)
                                             .Select(em => new
                                             {
                                                 em.FirstName,
                                                 em.LastName,
                                                 ManagerFirstName = em.Manager.FirstName,
                                                 ManagerLastName = em.Manager.LastName,
                                                 Projects = em.EmployeesProjects
                                                              .Select(p => new
                                                              {
                                                                  ProjectName = p.Project.Name,
                                                                  ProjectStartDate = p.Project.StartDate,
                                                                  ProjectEndDate = p.Project.EndDate.ToString() != null
                                                                                    ? p.Project.EndDate.ToString() : "not finished"
                                                              })
                                             })
                                             .ToList();

            foreach (var extractedEmployee in extractedEmbployees)
            {
                sb.AppendLine($"{extractedEmployee.FirstName} {extractedEmployee.LastName} - " +
                              $"Manager: {extractedEmployee.ManagerFirstName} {extractedEmployee.ManagerLastName}");

                foreach (var project in extractedEmployee.Projects)
                {
                    sb.AppendLine($"--{project.ProjectName} - " +
                                  $"{project.ProjectStartDate:M/d/yyyy h:mm:ss tt} - " +
                                  $"{project.ProjectEndDate:M/d/yyyy h:mm:ss tt}");
                }
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetAddressesByTown(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var extractedAdresses = context.Addresses
                                           .OrderByDescending(a => a.Employees.Count())
                                           .ThenBy(a => a.Town.Name)
                                           .ThenBy(a => a.AddressText)
                                           .Take(10)
                                           .Select(a => new
                                           {
                                               a.AddressText,
                                               TownName = a.Town.Name,
                                               EmployeeCount = a.Employees.Count()
                                           })
                                           .ToList();

            foreach (var address in extractedAdresses)
            {
                sb.AppendLine($"{address.AddressText}, {address.TownName} - {address.EmployeeCount} employees");
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetEmployee147(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employee = context.Employees
                                  .Where(em => em.EmployeeId == 147)
                                  .Select(em => new
                                  {
                                      em.FirstName,
                                      em.LastName,
                                      em.JobTitle,
                                      Projects = em.EmployeesProjects
                                                   .Select(ep => ep.Project.Name)
                                                   .OrderBy(e => e)
                                                   .ToList()
                                  })
                                  .Single();

            if (employee != null)
            {
                sb.AppendLine($"{employee.FirstName} {employee.LastName} - {employee.JobTitle}");

                foreach (var project in employee.Projects)
                {
                    sb.AppendLine($"{project}");
                }
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetDepartmentsWithMoreThan5Employees(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var departments = context.Departments
                                     .Where(d => d.Employees.Count() > 5)
                                     .OrderBy(d => d.Employees.Count())
                                     .ThenBy(d => d.Name)
                                     .Select(d => new
                                     {
                                         d.Name,
                                         ManagerFirstName = d.Manager.FirstName,
                                         ManagerLastName = d.Manager.LastName,
                                         Employees = d.Employees
                                                      .Select(em => new
                                                      {
                                                          em.FirstName,
                                                          em.LastName,
                                                          em.JobTitle
                                                      })
                                                      .OrderBy(em => em.FirstName)
                                                      .ThenBy(em => em.LastName)
                                                      .ToList()
                                     })
                                     .ToList();

            foreach (var department in departments)
            {
                sb.AppendLine($"{department.Name} - {department.ManagerFirstName} {department.ManagerLastName}");

                foreach (var employee in department.Employees)
                {
                    sb.AppendLine($"{employee.FirstName} {employee.LastName} - {employee.JobTitle}");
                }
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetLatestProjects(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var projects = context.Projects
                                  .OrderByDescending(p => p.StartDate)
                                  .ThenBy(p => p.Name)
                                  .Take(10)
                                  .Select(p => new
                                  {
                                      p.Name,
                                      p.Description,
                                      p.StartDate
                                  })
                                  .OrderBy(p => p.Name)
                                  .ToList();

            foreach (var project in projects)
            {
                sb.AppendLine($"{project.Name}");
                sb.AppendLine($"{project.Description}");
                sb.AppendLine($"{project.StartDate:M/d/yyyy h:mm:ss tt}");
            }

            return sb.ToString().TrimEnd();
        }

        public static string IncreaseSalaries(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employees = context.Employees
                                   .Where(e => e.Department.Name == "Engineering" ||
                                               e.Department.Name == "Tool Design" ||
                                               e.Department.Name == "Marketing" ||
                                               e.Department.Name == "Information Services")
                                   .Select(e => new
                                   {
                                       e.FirstName,
                                       e.LastName,
                                       Salary = e.Salary * 1.12M
                                   })
                                   .OrderBy(e => e.FirstName)
                                   .ThenBy(e => e.LastName);

            foreach (var employee in employees)
            {
                sb.AppendLine($"{employee.FirstName} {employee.LastName} (${employee.Salary:F2})");
            }

            return sb.ToString().TrimEnd();
        }

        public static string DeleteProjectById(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            Project project = context.Projects.FirstOrDefault(p => p.ProjectId == 2);
            var projectEmployees = context.EmployeesProjects
                                          .Where(ep => ep.ProjectId == 2)
                                          .ToList();

            foreach (var projectEmployee in projectEmployees)
            {
                context.EmployeesProjects.Remove(projectEmployee);
            }

            context.Remove(project);
            context.SaveChanges();

            var projects = context.Projects
                                  .Take(10)
                                  .Select(p => p.Name)
                                  .ToList();

            return string.Join("\r\n", projects);
        }

        public static string RemoveTown(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            List<Employee> employees = context.Employees
                                   .Where(e => e.Address.Town.Name == "Seattle")
                                   .Select(e => e)
                                   .ToList();

            foreach (var employee in employees)
            {
                employee.Address = null;
            }

            List<Address> adresses = context.Addresses
                                            .Where(a => a.Town.Name == "Seattle")
                                            .Select(a => a)
                                            .ToList();
            int adressesCout = adresses.Count();

            foreach (Address adress in adresses)
            {
                context.Addresses.Remove(adress);
            }

            Town townSeatle = context.Towns
                                     .FirstOrDefault(t => t.Name == "Seattle");

            context.Towns.Remove(townSeatle);

            context.SaveChanges();
            return $"{adressesCout} addresses in Seattle were deleted";
        }
    }
}
