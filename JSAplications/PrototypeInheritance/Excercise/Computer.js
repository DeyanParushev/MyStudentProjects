function computerCompiler() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        };
    };

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height
        };
    };

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        };
    };

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly.');
            };

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        };
    };

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        };

        get battery() {
            return this._battery;
        };

        set battery(battery) {
            if (!(battery instanceof Battery)) {
                throw new TypeError();
            } else {
                this._battery = battery;
            };
        };
    };

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        };

        get keyboard() {
            return this._keyboard;
        };

        set keyboard(keyboard) {
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError();
            } else {
                this._keyboard = keyboard;
            };
        };

        get monitor() {
            return this._monitor;
        };

        set monitor(monitor) {
            if (!(monitor instanceof Monitor)) {
                throw new TypeError();
            } else {
                this._monitor = monitor;
            };
        };
    };

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
};

let components = computerCompiler();

let Computer = components.Computer;
let Laptop = components.Laptop;
let Desktop = components.Desktop;
let Monitor = components.Monitor;
let Battery = components.Battery;
let Keyboard = components.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);

let l = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", "pesho");
let d1 = new Desktop("JAR Computers", 3.3, 8, 1, 1, monitor);
let d2 = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, "monitor");
