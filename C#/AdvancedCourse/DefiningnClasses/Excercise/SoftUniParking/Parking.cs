namespace SoftUniParking
{
    using System.Collections.Generic;
    using System.Linq;

    public class Parking
    {
        private List<Car> cars;
        private int capacity;

        public Parking(int capacity)
        {
            this.Cars = new List<Car>();
            this.Capacity = capacity;
        }
        public int Count
        {
            get { return this.Cars.Count; }
        }

        private int Capacity
        {
            get { return this.capacity; }
            set { this.capacity = value; }
        }

        private List<Car> Cars
        {
            get { return this.cars; }
            set { this.cars = value; }
        }

        public string AddCar(Car car)
        {
            if (this.cars.Exists(x => x.RegistrationNumber == car.RegistrationNumber))
            {
                return "Car with that registration number, already exists!";
            }
            else if (this.Cars.Count >= this.Capacity)
            {
                return "Parking is full!";
            }
            else
            {
                this.Cars.Add(car);

                return $"Successfully added new car {car.Make} {car.RegistrationNumber}";
            }
        }

        public string RemoveCar(string registrationNumber)
        {
            if (this.Cars.Any(x => x.RegistrationNumber == registrationNumber))
            {
                this.Cars.Remove(this.Cars.FirstOrDefault(x => x.RegistrationNumber == registrationNumber));

                return $"Successfully removed {registrationNumber}";
            }
            else
            {
                return $"Car with that registration number, doesn't exist!";
            }
        }

        public Car GetCar(string registrationNumber)
        {
            Car outputCar = this.Cars.FirstOrDefault(x => x.RegistrationNumber == registrationNumber);

            return outputCar;
        }

        public void RemoveSetOfRegistrationNumbers(List<string> registrationNumbers)
        {
            foreach (string registrationNumber in registrationNumbers)
            {
                this.Cars.RemoveAll(x => x.RegistrationNumber == registrationNumber);
            }
        }
    }
}
