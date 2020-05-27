function classSolution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.bonuses = 0;
            this.currentTask = 0
        };

        work() {
            if (this.currentTask < this.tasks.length) {
                console.log(this.name + ' ' + this.tasks[this.currentTask]);
                this.currentTask++;
            } else {
                this.currentTask = 0;
                console.log(this.name + ' ' + this.tasks[this.currentTask]);
                this.currentTask++;
            };
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.bonuses} this month.`);
        };
    };

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`is working on a simple task.`];
        };
    };

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = ['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.'];
        };
    };

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = ['scheduled a meeting.', 'is preparing a quarterly report.'];
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.bonuses + this.dividend} this month.`);
        };
    };

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
};

function functionalSolution() {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.bonuses = 0;
        this.currentTask = 0;
    };

    Employee.prototype.work = function() {
        if (this.currentTask < this.tasks.length) {
            console.log(this.name + ' ' + this.tasks[this.currentTask]);
            this.currentTask++;
        } else {
            this.currentTask = 0;
            console.log(this.name + ' ' + this.tasks[this.currentTask]);
            this.currentTask++;
        };
    };

    Employee.prototype.collectSalary = function() {
        console.log(`${this.name} received ${this.salary + this.bonuses} this month.`);
    };

    function Junior(name, age) {
        Employee.call(this, name, age);
        this.tasks = [`is working on a simple task.`];
    };
    Junior.prototype = Object.create(Employee.prototype);

    function Senior(name, age) {
        Employee.call(this, name, age);
        this.tasks = ['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.'];
    };
    Senior.prototype = Object.create(Employee.prototype);

    function Manager(name, age) {
        Employee.call(this, name, age);
        this.tasks = ['scheduled a meeting.', 'is preparing a quarterly report.'];
        this.dividend = 0;
    };
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.collectSalary = function() {
        console.log(`${this.name} received ${this.salary + this.bonuses + this.dividend} this month.`);
    };

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
};

let workers = functionalSolution();
let j = new workers.Junior('dragan', 25);
let s = new workers.Senior('ivan', 35);
let m = new workers.Manager('pesho', 45);
m.dividend = 500;

s.work();
// ivan is working on a complicated task.

s.work();
// ivan is taking time off work.

s.work();
// ivan is supervising junior workers.

s.work();
// ivan is working on a complicated task.

s.work();
// ivan is taking time off work.

s.work();
// ivan is supervising junior workers.

s.work();
// ivan is working on a complicated task.

s.work();
// ivan is taking time off work.

s.work();
// ivan is supervising junior workers.
