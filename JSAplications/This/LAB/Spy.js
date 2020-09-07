function Spy(obj, method) {
    let originalFunction = obj[method];

    let result = {
        count: 0
    };

    obj[method] = function () {
        result.count++;
        return originalFunction.apply(this, arguments);
    };

    return result;
};
