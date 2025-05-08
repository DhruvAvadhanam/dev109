var input = prompt("What value do you want the multiplication table for? (0-10)");

if (isNaN(input) || input==null) {
  input=0;
}

var msg = "<h2>Multiplication Table" + "</h2>";
var output = msg;

function multiplication() {
  var index = 1;
  while (index <= 10) {
    output += index + " x " + input + " = " + (index * input) + "<br>";
    index++;
  }
}

multiplication();
document.getElementById("blackboard").innerHTML = output;
