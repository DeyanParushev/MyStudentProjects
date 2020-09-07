function classSolution() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        };
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        };

        toString() {
            let baseToString = super.toString().slice(super.toString()[0], super.toString().length - 1);
            return baseToString + `, subject: ${this.subject})`;
        };
    };

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        };

        toString() {
            let baseToString = super.toString().slice(super.toString()[0], super.toString().length - 1);
            return baseToString + `, course: ${this.course})`;
        };
    };

    return {
        Person,
        Teacher,
        Student
    };
};


function functionSolution() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    };

    Person.prototype.toString = function () {
        return `${Person.name} (name: ${this.name}, email: ${this.email})`;
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;
    };

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.toString = function () {
        let output = `${Teacher.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        return output;
    };
    function Student(name, email, course) {
        Person.call(this, name, email);
        this.course = course;
    };

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.toString = function () {
        let output = `${Student.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        return output;
    };

    return {
        Person,
        Teacher,
        Student
    };
};

let functions = functionSolution();

let person = new functions.Person('Pesho', 'ivanov');
let teacher = new functions.Teacher('Ivan', 'Ivanov', 'physics');
let student = new functions.Student('Dragan', 'Cankov', 'chemistry');

console.log(person.toString());
// Person (name: Pesho, email: ivanov)

console.log(teacher.toString());
// Teacher (name: Ivan, email: Ivanov, subject: physics)

console.log(student.toString());
// Student (name: Dragan, email: Cankov, course: chemistry)
