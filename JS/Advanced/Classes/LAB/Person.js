function solve() {
    class Person {
        constructor(name, lastName, age, email) {
            this.firstName = name;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        };

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    };

    let ana = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let softUni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Johnson', 25);
    let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [ana, softUni, stephan, gabriel];
};
