function solve(input){
    let delimiter = input[input.length -1];
    input.splice(input.length -1, 1);
    console.log(input.join(delimiter, input));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']);

// One-Two-Three-Four-Five
// How about no?_I_will_not_do_it!
