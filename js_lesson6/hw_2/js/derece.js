alert(
  "Please Enter the Degree Of The Unit You Want Converted and Leave the Target Unit Empty"
);

while (true) {
  // kullanıcının en az ve en fazla bir birim için değer girişi yapması sağlanmakta.
  counter = 0;
  var counter;
  var C = prompt("Celcius =");
  var F = prompt("Fahrenayt =");

  if (C == "") {
    //array kullanmadığım için birden fazla girilmemiş değişen kontrolünü tek tek yapıyorum
    counter++;
  }
  if (F == "") {
    counter++;
  }

  if (counter > 1) {
    alert("Please Enter A Degree For One Of The Units");
  } else if (counter == 0) {
    alert("Please Leave One Of The Units Empty");
  } else {
    break;
  }
}

let fToC = (fah)=>{
    return (fah-32)*(5/9);
}

let cToF = (cel)=>{
    return (cel*5/9)+32
}

(
    () =>{
        switch ("") {
            case C:
                document.writeln(`Entered Degree Fahrenayt = <br/>
                ${F}°F <br/>
                Result of Convertion = <br/>
                ${fToC(F)}°C`)
                break;
            
            case F:
                document.writeln(`Entered Degree Celcius = <br/>
                ${C}°C <br/>
                Result of Convertion = <br/>
                ${cToF(C)}°F`)
                break;
            default:
                break;
        }
    }
)();