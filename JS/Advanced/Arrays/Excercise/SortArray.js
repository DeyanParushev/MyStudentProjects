function sortingElements(input) {
    Array(input.sort((x, y) => sortingCriteria(x, y)));

    function sortingCriteria(x, y) {
        if (x.length < y.length) {
            return -1;
        } else if (x.length > y.length) {
            return 1;
        } else {
            return x.localeCompare(y);
        }
    }

    console.log(input.join('\n'));
}

sortingElements(['alpha',
    'beta',
    'gamma']);

sortingElements(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

sortingElements(['test',
    'Deny',
    'omen',
    'Default']);
