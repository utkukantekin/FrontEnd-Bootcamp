var fNum = Number(prompt("Please Enter a Number"));
var sNum = Number(prompt("Please Enter a Number Again"));

var smallNum = Math.min(fNum,sNum);
var bigNum = Math.max(fNum,sNum);

document.writeln(`first number entered: ${fNum}, second number entered: ${sNum}` + "<br>");
document.writeln(`smallest number: ${smallNum}` + "<br>");
document.writeln(`biggest number: ${bigNum}` + "<br>");
document.writeln(`square root of biggest number: ${Math.sqrt(bigNum)}` + "<br>");
document.writeln(`ceil of square root of biggest number ${Math.ceil(Math.sqrt(bigNum))}` + "<br>");
document.writeln(`absulate value of smallest number: ${Math.abs(smallNum)}` + "<br>");
document.writeln(`smallest number powered by biggest number: ${Math.pow(smallNum,bigNum)}` + "<br>");