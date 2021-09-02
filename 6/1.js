const input = require('./input');

var inputSet = input.realInput;
// var inputSet = input.testInput;

let groupResponses = inputSet.split('\n\n');

console.dir(groupResponses);

let responseTotals = groupResponses.map( groupResponse => {

    let groupResponseTotal = new Set(groupResponse.replace(/\n/g,'').split(''));

    return groupResponseTotal.size;
});

console.log(responseTotals.reduce( (a,b) => a+b, 0));
