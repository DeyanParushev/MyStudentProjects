class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static distance(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;

        let sqrtSum = Math.pow(dx, 2) + Math.pow(dy, 2);

        return Math.sqrt(sqrtSum);
    };
};
