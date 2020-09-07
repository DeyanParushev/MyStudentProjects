class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };

    set diameter(inputDiameter) {
        this.radius = inputDiameter / 2;
    };

    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    };
};
