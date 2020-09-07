function sortArr(arr, order){
    let obj = {
        asc: (collection) => collection.sort((x, y) => x - y),
        desc: (collection) => collection.sort(((x, y) => x - y)).reverse()
    }

    return obj[order](arr);
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));

// [ 6, 7, 8, 14, 17 ]
// [ 17, 14, 8, 7, 6 ]
