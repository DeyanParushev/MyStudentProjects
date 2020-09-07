function solution(a) {
    return (b) => {
        return a + b;
    };
};

console.log(solution(5)(2));

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        };
    };
};

console.log(multiply(5)(2)(3));

// 7
// 30
