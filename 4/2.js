const input = require('./input');

var inputSet = input.realInput;
// var inputSet = input.testInput;

var passportArray = inputSet.split('\n\n');

var passport;

let validationArray = passportArray.map( passport => {
  let fields = passport.match(/(byr:(19[2-9][0-9]|200[0-2]))|(iyr:(201[0-9]|2020))|(eyr:(202[0-9]|2030))|(hgt:(1[5-8][0-9]|19[0-3])cm|hgt:(59|6[0-9]|7[0-6])in)|(hcl:#[0-9a-f]{6}\b)|(ecl:(amb|blu|brn|gry|grn|hzl|oth))|(pid:\d{9}\b)/g);

  let thisPassport = new Set();
  
  if (fields) {
    fields.forEach(field => {
      thisPassport.add(field.split(':')[0]);
    });
  }

  let result = Number(thisPassport.has('byr')
         && thisPassport.has('iyr')
         && thisPassport.has('eyr')
         && thisPassport.has('hgt')
         && thisPassport.has('ecl')
         && thisPassport.has('pid')
         && thisPassport.has('hcl'));

  return result;
});

console.log(validationArray.reduce( (a,b) => a+b, 0));
