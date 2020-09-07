let solution = (() => {
    return {
        add :  function (pointA, pointB) {
            Ax = pointA[0];
            Ay = pointA[1];
            Bx = pointB[0];
            By = pointB[1];
            return [Ax + Bx, Ay + By];
        },
        multiply : function (pointA, scalar) {
            Ax = pointA[0];
            Ay = pointA[1];
            return [Ax * scalar, Ay * scalar];
        },
        length : function (vectorA) {
            Ax = vectorA[0];
            Ay = vectorA[1];
            return Math.sqrt(Math.pow(Ax, 2) + Math.pow(Ay, 2));
        },
        dot : function (vectorA, vectorB) {
            Ax = vectorA[0];
            Ay = vectorA[1];
            Bx = vectorB[0];
            By = vectorB[1];
            return Ax * Ay + Bx * By;
        },
        cross :  function (vectorA, vectorB) {
            Ax = vectorA[0];
            Ay = vectorA[1];
            Bx = vectorB[0];
            By = vectorB[1];
            return Ax * Ay - Bx * By;
        }
    }
})();

var answer = solution;
console.log(answer.multiply([3.5, -2], 2));

// [ 7, -4 ]

