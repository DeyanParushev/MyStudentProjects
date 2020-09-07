namespace MXGP.Core
{
    using System;
    using MXGP.Core.Contracts;
    using MXGP.IO.Contracts;

    public class Engine : IEngine
    {
        private IWriter writer;
        private IReader reader;
        private IChampionshipController controller;

        public Engine(IReader reader, IWriter writer)
        {
            this.writer = writer;
            this.reader = reader;
            this.controller = new ChampionshipController();
        }

        public void Run()
        {
            string inputCommand = reader.ReadLine();

            while (inputCommand != "End")
            {
                string[] inputLine = inputCommand.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (inputLine.Length < 2)
                {
                    inputCommand = reader.ReadLine();
                    continue;
                }

                string commandName = inputLine[0];
                string output = string.Empty;

                if (commandName == "CreateRider")
                {
                    try
                    {
                        output = controller.CreateRider(inputLine[1]);
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else if (commandName == "CreateMotorcycle")
                {
                    try
                    {
                        output = controller.CreateMotorcycle(inputLine[1], inputLine[2], int.Parse(inputLine[3]));
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else if (commandName == "AddMotorcycleToRider")
                {
                    try
                    {
                        output = controller.AddMotorcycleToRider(inputLine[1], inputLine[2]);
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else if (commandName == "AddRiderToRace")
                {
                    try
                    {
                        output = controller.AddRiderToRace(inputLine[1], inputLine[2]);
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else if (commandName == "CreateRace")
                {
                    try
                    {
                        output = controller.CreateRace(inputLine[1], int.Parse(inputLine[2]));
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else if (commandName == "StartRace")
                {
                    try
                    {
                        output = controller.StartRace(inputLine[1]);
                    }
                    catch (Exception ex)
                    {
                        output = ex.Message;
                    }
                }
                else
                {
                    break;
                }

                writer.WriteLine(output);

                inputCommand = reader.ReadLine();
            }
        }
    }
}
