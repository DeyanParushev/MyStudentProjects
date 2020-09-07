class Person {
    constructor(name, lastName, age, email){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    };

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
};
