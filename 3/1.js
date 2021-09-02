const input = require('./input');


var i = 0;

var inputSet = input.realInput;
// var inputSet = input.testInput;

var treeMap = inputSet.split('\n');
var treeMapWidth = treeMap[0].length;

var xIncrement = 3;
var yIncrement = 1;

var currentX = 0;
var currentY = 0;
var treecount = 0

let getLocationContent = (x, y) => {
  let result;

  try {
      result = (treeMap[y].substr(x % treeMapWidth,1) == '#');
  } catch (e) {
      result = null;
  }
  treecount += Number(result);
  return result;
};

while (getLocationContent(currentX += xIncrement, currentY += yIncrement) !== null) { };

console.log(treecount);

