const length = 8.2; //160
const height = 7.5 / 2; //76
const rows = 3;
const columns = 8;

var screenWidth = window.screen.width;
console.log(screenWidth);
var percentage = screenWidth / 100; // 0.92%
var CellsLocation = {};
console.log(percentage);
let k = 0;
for (var i = 0; i < rows; i++) {
  for (var j = -1; j < columns - 1; j++) {
    CellsLocation[k] = {
      cellNum: k,
      x: j * length * percentage,
      y: i * height * percentage,
    };
    k = k + 1;
  }
}

export default CellsLocation;
