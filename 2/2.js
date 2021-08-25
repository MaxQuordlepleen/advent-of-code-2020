const input = require('./input');

var i = 0;

var inputSet = input.realInput;
// var inputSet = input.testInput;

var validpasswordcount = 0;

for (i=0; i<inputSet.length; ++i) {

  let pwParts = inputSet[i].match(/(\d+)-(\d+) (.{1}): (.+)/);

  if ((Number(pwParts[4].substr(Number(pwParts[1])-1,1) == pwParts[3]) +
       Number(pwParts[4].substr(Number(pwParts[2])-1,1) == pwParts[3])) == 1) {
    ++validpasswordcount;
    console.log(inputSet[i] + ' was valid');
  } else {
    console.log(inputSet[i] + ' was invalid');
  }

}

console.log(`%d passwords found to be valid`, validpasswordcount);
