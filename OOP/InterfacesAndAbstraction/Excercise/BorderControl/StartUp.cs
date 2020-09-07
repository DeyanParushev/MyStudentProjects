namespace BorderControl
{
    using System;
    using System.Collections.Generic;

    public class StartUp
    {
        public static void Main()
        {
            string inputLine = Console.ReadLine();

            List<IIdentifiable> subjects = new List<IIdentifiable>();

            while (inputLine != "End")
            {
                string[] inputInfo = inputLine.Split();

                IIdentifiable subject;

                if(inputInfo.Length < 3)
                {
                    string model = inputInfo[0];
                    string id = inputInfo[1];

                    subject = new Robot(model, id);
                }
                else
                {
                    string name = inputInfo[0];
                    int age = int.Parse(inputInfo[1]);
                    string id = inputInfo[2];

                    subject = new Citizen(name, age, id);
                }

                subjects.Add(subject);

                inputLine = Console.ReadLine();
            }

            string fakeId = Console.ReadLine();

            subjects.FindAll(x => x.Id.EndsWith(fakeId))
                    .ForEach(x => Console.WriteLine(x.Id)); 
        }
    }
}
