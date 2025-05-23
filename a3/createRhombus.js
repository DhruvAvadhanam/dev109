//draws the whole rhombus
function createRhombus(size, colorEven, colorOdd, symbol) {
  drawTopRight(size, colorEven, colorOdd, symbol);
  drawBottomRight(size, colorEven, colorOdd, symbol);
  drawTopLeft(size, colorEven, colorOdd, symbol);
  drawBottomLeft(size, colorEven, colorOdd, symbol);
}

//draws the top right of the rhombus
function drawTopRight(size, colorEven, colorOdd, symbol){
  var line = "";
  
  for (var i=0; i<size; i++) {
    line += "<p>";
    for (var j=0; j<=i; j++) {
      if (j%2===0) {
        line += "<span style='color:" + colorEven + ";'>" + symbol +"</span>";
      } else {
        line += "<span style='color:" + colorOdd + ";'>" + symbol +"</span>";
      } 
    } 
    line += "</p>";
    console.log(line);

  }  
  document.getElementById("upRight").innerHTML = line;
}

//draws the bottom right of the rhombus
function drawBottomRight(size, colorEven, colorOdd, symbol){
  var line = "";
  
  for (var i=size; i>0; i--) {
    line += "<p>";
    for (var j=0; j<i; j++) {
      if (j%2===0) {
        line += "<span style='color:" + colorEven + ";'>" + symbol +"</span>";
      } else {
        line += "<span style='color:" + colorOdd + ";'>" + symbol +"</span>";
      } 
    } 
    line += "</p>";
    console.log(line);

  }  
  document.getElementById("downRight").innerHTML = line;
}

//draws the top left of the rhombus
function drawTopLeft(size, colorEven, colorOdd, symbol){
  var line = "";
  
  for (var i=size-1; i>=0; i--) {
    line += "<p>";
    for (var j=0; j<size; j++) {
      if (j<i){
        line += "<span style='color:" + "white" + ";'>" + symbol +"</span>";
      } else if (j%2===0) {
        line += "<span style='color:" + colorEven + ";'>" + symbol +"</span>";
      } else {
        line += "<span style='color:" + colorOdd + ";'>" + symbol +"</span>";
      } 
    } 
    line += "</p>";
    console.log(line);
  }  
  document.getElementById("upLeft").innerHTML = line;
}

//draws the bottom left of the rhombus
function drawBottomLeft(size, colorEven, colorOdd, symbol){
  var line = "";
  var whitespaces=0;

  for (var i = 0; i < size; i++) {
    line += "<p>";
    for (var j = 0; j < size; j++) {
      if (j < whitespaces) {
        line += "<span style='color:white;'>" + symbol + "</span>";
      } else {
        if (j % 2 === 0) {
          line += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
        } else {
          line += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
        }
      }
    }
    line += "</p>";
    whitespaces++;
  }
  document.getElementById("downLeft").innerHTML = line;
}
