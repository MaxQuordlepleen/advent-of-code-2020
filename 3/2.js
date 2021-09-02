var treeMap = inputSet.split('\n');
var treeMapWidth = treeMap[0].length;

var xIncrement = 1;
var yIncrement = 2;

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

// 1,1 (80)
// 3,1 (270)
// 5,1 (60)
// 7,1 (63)
// 1, (26)
console.log(80*270*60*63*26)
