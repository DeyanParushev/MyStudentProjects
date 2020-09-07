function countWords(input) {
    let output = {};
    let splitString = input[0].match(/\w+/g)
        .map((x) => {
            if (!(x in output)) {
                output[x] = 1;
            } else {
                output[x]++;
            }
        });
    console.log(JSON.stringify(output));
};

countWords(['Far too slow, you`re far too slow.']);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);

// {"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}
// {"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}
