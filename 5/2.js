const input = require('./input');

var inputSet = input.realInput;
// var inputSet = input.testInput;

let seatNumbers = inputSet.split('\n').map( pass => {

    let row = parseInt(pass.substr(0,7).replace(/B/g,'1').replace(/F/g,'0'),2);

    let column = parseInt(pass.substr(7,3).replace(/R/g,'1').replace(/L/g,'0'),2);

    return ((row * 8) + column);
});

let allUsedSeats = new Set(seatNumbers);
let allPossibleSeats = [...Array(1023).keys()];

let difference = new Set(allPossibleSeats.filter(x => !allUsedSeats.has(x)));

console.log('The answer is an isolated value in the middle of the following set:')
console.log(difference);


