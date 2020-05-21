function createRectangle(input) {
    let output = [];

    input.forEach(element => {
        let [width, height] = element;
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compareTo: function (otherRec) {
                let a1 = rectangle.area();
                let a2 = otherRec.area();
                if (rectangle.area() === otherRec.area()) {
                    return otherRec.width - rectangle.width;
                } else {
                    return otherRec.area() - rectangle.area();
                };
            },
        };

        output.push(rectangle);
    });

    output.sort((a, b) => a.compareTo(b));

    return output;
};

let sizes = [[1, 1], [15, 1], [1, 1], [1, 15], [7, 7], [25, 3], [13, 3], [15, 5]];
console.log(createRectangle(sizes));

// [
//     {
//         width: 25,
//         height: 3,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 15,
//         height: 5,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 7,
//         height: 7,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 13,
//         height: 3,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 15,
//         height: 1,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 1,
//         height: 15,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 1,
//         height: 1,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     },
//     {
//         width: 1,
//         height: 1,
//         area: [Function: area],
//         compareTo: [Function: compareTo]
//     }
// ]
