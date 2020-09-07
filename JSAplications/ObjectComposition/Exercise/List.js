function createSortedList() {
    let arr = [];

    function sorting(x, y) {
        return x - y;
    };

    function add(x) {
        arr.push(x);
        arr.sort(sorting);
    };

    function remove(index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1)
            arr.sort(sorting);
        };
    };

    function get(index) {
        if (index >= 0 && index < arr.length) {
            arr.sort(sorting);
            return arr[index];
        };
    };

    return {
        add,
        remove,
        get,
        get size() {
            return arr.length;
        }
    };
};

