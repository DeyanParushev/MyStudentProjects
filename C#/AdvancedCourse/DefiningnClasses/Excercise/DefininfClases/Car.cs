namespace DefiningClasses
{
    using System;
    using System.Linq;

    public class Car
    {
        private string model;
        private Engine engine = new Engine();
        private Cargo cargo = new Cargo();
        private Tire[] tires = new Tire[4];

        public Car(string model, 
            int engineSpeed, int enginePower, 
            int cargoWeigh, string cargoType, 
            double tireOnePresure, int tireOneAge, 
            double tireTwoPresure, int tireTwoAge,
            double tireThreePresure, int tireThreeAge, 
            double tireFourPresure, int tireFourAge)
        {
            this.Model = model;

            this.Engine.EngineSpeed = engineSpeed;
            this.Engine.EnginePower = enginePower;

            this.Cargo.CargoWeight = cargoWeigh;
            this.Cargo.CargoType = cargoType;

            this.Tires[0] = new Tire();
            this.Tires[0].TirePresure = tireOnePresure;
            this.Tires[0].TireAge = tireOneAge;

            this.Tires[1] = new Tire();
            this.Tires[1].TirePresure = tireTwoPresure;
            this.Tires[1].TireAge = tireTwoAge;

            this.Tires[2] = new Tire();
            this.Tires[2].TirePresure = tireThreePresure;
            this.Tires[2].TireAge = tireThreeAge;

            this.Tires[3] = new Tire();
            this.Tires[3].TirePresure = tireFourPresure;
            this.Tires[3].TireAge = tireFourAge;
        }

        public string Model { get => this.model; set => this.model = value; }

        public Engine Engine { get => this.engine; set => this.engine = value; }

        public Cargo Cargo { get => this.cargo; set => this.cargo = value; }

        public Tire[] Tires { get => this.tires; set => this.tires = value; }
    }
}
