class Company {
    constructor() {
        this._departments = [];
    };

    addEmployee(name, salary, position, department) {
        let args = [name, salary, position, department];
        args.map(x => {
            if (x === '' || x === undefined || x === null) {
                throw new Error('Invalid input!');
            };
        });

        if (Number(args[1]) < 0) {
            throw new Error('Invalid input!');
        };

        let newEmployee = {
            name: args[0],
            salary: Number(args[1]),
            position: args[2],
            department: args[3],
        }

        let newDepartment = {
            name: department,
            employees: []
        };

        if (this._departments.find(x => x.name === department) === undefined) {
            newDepartment.employees.push(newEmployee);
            this._departments.push(newDepartment);
        } else {
            let dep = this._departments.find(x => x.name === department);
            dep.employees.push(newEmployee);
        }

        return `New employee is hired. Name: ${newEmployee.name}. Position: ${newEmployee.position}`
    };

    bestDepartment() {
        let bestDepartmentName = '';
        let averageSalary = 0;
        this._departments.map(x => {
            let currentAverageSalary = 0;
            x.employees.map((y, i) => {
                currentAverageSalary += y.salary;
            });
            currentAverageSalary /= x.employees.length;

            if (currentAverageSalary > averageSalary) {
                averageSalary = currentAverageSalary;
                bestDepartmentName = x.name;
            }
        });

        let bestDepartment = this._departments.find(x => x.name === bestDepartmentName);
        bestDepartment.employees.sort(sortEmployees);

        function sortEmployees(a, b) {
            let result = 0;

            if (a.salary < b.salary) {
                result = 1;
            } else if (a.salary > b.salary) {
                result = -1
            } else {
                if (a.name > b.name) {
                    result = 1;
                } else {
                    result = -1;
                }
            };

            return result;
        };

        let output = '';

        output += `Best Department is: ${bestDepartment.name}`;
        output += `\nAverage salary: ${averageSalary.toFixed(2)}`;
        bestDepartment.employees.forEach(employee => {
            output += `\n${employee.name} ${employee.salary} ${employee.position}`;
        });

        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Best Department is: Human resources
// Average salary: 1675.00
// Stanimir 2000 engineer
// Gosho 1350 HR
