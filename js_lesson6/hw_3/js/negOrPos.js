(() => {
  while (true) { // makes sure the entered value is numeric
    var number = prompt("Please Enter A Number: ");
    let numControl = number*number;

    if (isNaN(numControl)) {
      alert("Pleae Enter A Numaric Value");
    }else{
        break;
    }
  }
  if (number < 0) {
    document.writeln(
      'Entered nmber is NEGATIVE <br/>Why so negative <i class="fa-solid fa-face-frown"></i>'
    );
  } else if (number > 0) {
    document.writeln(
      'Entered number is POSITIVE <br/>Stay positive <i class="fa-solid fa-face-smile-wink"></i>'
    );
  } else {
    document.writeln(
      `Entered number is NEUTRAL <br/> <i class="fa-solid fa-face-meh"></i> <i class="fa-solid fa-face-meh"></i>
       <i class="fa-solid fa-face-meh"></i>`
    );
  }
})();
