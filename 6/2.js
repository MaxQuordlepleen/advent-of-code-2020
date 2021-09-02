const input = require('./input');

var inputSet = input.realInput;
// var inputSet = input.testInput;

let groupResponses = inputSet.split('\n\n');

let responseTotals = groupResponses.map( groupResponse => {

    let individualResponse = groupResponse.split('\n');

    groupAggregateResponse = { size: 0 };

    individualResponse.forEach(response => {
        response.split('').forEach( questionYes => {
            if (groupAggregateResponse[questionYes]) {
                groupAggregateResponse[questionYes]++;
            } else {
                groupAggregateResponse[questionYes] = 1;
            }
        });
        groupAggregateResponse.size++;
    });

    let result = Object.keys(groupAggregateResponse).map( key => {
        if (groupAggregateResponse.hasOwnProperty(key)) {
            let allRespondedYes = 0;

            if(groupAggregateResponse[key] === groupAggregateResponse.size && key !== 'size' ) {
                allRespondedYes = 1;
            }
            
            return allRespondedYes;
        }
    });

    return result.reduce( (a,b) => a+b, 0)
});

console.log(responseTotals.reduce( (a,b) => a+b, 0));


