// Code goes here

$('#pink').click(function() {
  buttonClick("pink");
});

$('#red').click(function() {
  buttonClick("red");
});

$('#purple').click(function() {
  buttonClick("purple");
});

var rainbow = $(".rainbow");
var currentColor = "black";

function buttonClick(color) {
  if(currentColor === "pink" && color === "pink") {
    rainbow.css("background-color", "black");
    currentColor = "black";
  }
  else if(color === "pink") {
     rainbow.css("background-color", "pink");
     currentColor = "pink";
  }
  
  else if(currentColor === "red" && color === "red") {
    rainbow.css("background-color", "black");
    currentColor = "black";
  }
  else if(color === "red") {
    rainbow.css("background-color", "red");
    currentColor = "red";
  }
  
  else if(currentColor === "purple" && color === "purple") {
    rainbow.css("background-color", "black");
    currentColor = "black";
  }
  else if(color === "purple") {
    rainbow.css("background-color", "purple");
    currentColor = "purple";
  }
  
}