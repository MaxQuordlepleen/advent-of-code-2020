const input = require('./input');

var inputSet = input.realInput;
// var inputSet = input.testInput;

var passportArray = inputSet.split('\n\n');

var passport;

let validationArray = passportArray.map( passport => {
  let fields = passport.match(/(\S*)/g);

  let thisPassport = new Set();

  fields.forEach(field => {
    thisPassport.add(field.split(':')[0]);
  });

  thisPassport.delete('cid');

  return Number(thisPassport.has('byr')
         && thisPassport.has('iyr')
         && thisPassport.has('eyr')
         && thisPassport.has('hgt')
         && thisPassport.has('ecl')
         && thisPassport.has('pid')
         && thisPassport.has('hcl'));
});

console.log(validationArray.reduce( (a,b) => a+b, 0));
